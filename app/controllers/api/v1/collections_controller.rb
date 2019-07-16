module Api
  module V1
    class Api::V1::CollectionsController < ApplicationController
      def create
        @collection = Collection.create(
          title: collection_params[:title]
        )

        collection_params[:recommends].each do |recommend_params|
          recommend = Recommend.create(
            name: recommend_params[:name],
            price: recommend_params[:price],
            collection_id: @collection.id
          )

          recommend.shop = Shop.create(recommend_params[:shop])
        end

        p "--------"
        p collection_params
        p "--------"

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
                :reco_image,
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
