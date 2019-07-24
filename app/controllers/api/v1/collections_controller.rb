module Api
  module V1
    class CollectionsController < ApplicationController
      def create
        @collection = Collection.create(title: params[:title])

        recommend_1 = Recommend.new(
          name: params[:reco_name_1],
          price: params[:reco_price_1],
          reco_image: params[:reco_image_1],
          collection: @collection
        )
        if recommend_1.save
          recommend_1.shop = Shop.create(
            name: params[:shop_name_1],
            googlemap_link: params[:shop_googlemap_link_1]
          )
        end

        # @collection = Collection.create(
        #   title: collection_params[:title]
        # )

        # collection_params[:recommends].each do |recommend_params|
        #   p recommend_params[:reco_image]
        #   recommend = Recommend.new(
        #     name: recommend_params[:name],
        #     price: recommend_params[:price],
        #     reco_image: recommend_params[:reco_image],
        #     collection_id: @collection.id
        #   )

        #   p "====--====----====----====----===="
        #   p "\n"
        #   p "\n"
        #   p recommend
        #   p "\n"
        #   p "\n"
        #   p "====--====----====----====----===="
        #   if recommend.save
        #     recommend.shop = Shop.create(recommend_params[:shop])
        #   end
          
        #  end

        render json: @collection
      end
    
      def index
        collections = Collection.order(created_at: "DESC").includes(recommends: :shop).references(:recommends, :shop)
        @collections = []
        collections.each do |collection|
          shopIncludingRecommends = []
          collection.recommends.each do |recommend|
            p recommend.shop.name
            shopIncludingRecommends.push(
              {
                name: recommend.name,
                price: recommend.price,
                reco_image: recommend.fitted_image_url,
                shop: {
                  name: recommend.shop.name,
                  googlemap_link: recommend.shop.googlemap_link 
                }
              }
            )
          end
          @collections.push({
            title: collection.title,
            recommends: shopIncludingRecommends
          })
        end

        render json: @collections
      end
    
      private
    
        def collection_params
          params.require(:collection).permit(
            :title,
            {
              recommends: [
                :name,
                :price,
                reco_image: [],
                shop: [
                  :name,
                  :googlemap_link
                ]
              ]
            }
          )
        end
    end
  end
end
