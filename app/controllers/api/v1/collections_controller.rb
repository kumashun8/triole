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
        else
          @collection.destroy
        end

        recommend_2 = Recommend.new(
          name: params[:reco_name_2],
          price: params[:reco_price_2],
          reco_image: params[:reco_image_2],
          collection: @collection
        )
        if recommend_2.save
          recommend_2.shop = Shop.create(
            name: params[:shop_name_2],
            googlemap_link: params[:shop_googlemap_link_2]
          )
        else
          @collection.destroy
        end

        recommend_3 = Recommend.new(
          name: params[:reco_name_3],
          price: params[:reco_price_3],
          reco_image: params[:reco_image_3],
          collection: @collection
        )
        if recommend_3.save
          recommend_3.shop = Shop.create(
            name: params[:shop_name_3],
            googlemap_link: params[:shop_googlemap_link_3]
          )
        else
          @collection.destroy
        end

        render json: @collection
      end
    
      def index
        collections = Collection.order(created_at: "DESC").includes(recommends: :shop).references(:recommends, :shop)
        @collections = []
        collections.each do |collection|
          shopIncludingRecommends = []
          collection.recommends.each do |recommend|
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
