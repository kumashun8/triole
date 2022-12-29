module Api
  module V1
    class CollectionsController < ApplicationController
      def create
        p params[:sample][:user]
        @collection = Collection.create(
          title: params[:title],
          description: params[:description]
        )

        @collection.tag_list.add(params[:tags], parse: true)
        @collection.save
        p @collection.tags

        recommend_1 = Recommend.new(
          name: params[:reco_name_1],
          price: params[:reco_price_1],
          reco_image: params[:reco_image_1],
          collection: @collection
        )
        if recommend_1.save && params[:shop_name_1] != "undefined"
          recommend_1.shop = Shop.create(
            name: params[:shop_name_1],
            googlemap_link: params[:shop_googlemap_link_1],
            prefecture: params[:shop_prefecture_1]
          )
        else
          @collection.destroy
        end

        if params[:reco_name_2].present?
          recommend_2 = Recommend.new(
            name: params[:reco_name_2],
            price: params[:reco_price_2],
            reco_image: params[:reco_image_2],
            collection: @collection
          )
          if recommend_2.save && params[:shop_name_2] != "undefined"
            recommend_2.shop = Shop.create(
              name: params[:shop_name_2],
              googlemap_link: params[:shop_googlemap_link_2],
              prefecture: params[:shop_prefecture_2]
            )
          else
            @collection.destroy
          end
        end
        
        if params[:reco_name_3].present?
          recommend_3 = Recommend.new(
            name: params[:reco_name_3],
            price: params[:reco_price_3],
            reco_image: params[:reco_image_3],
            collection: @collection
          )
          if recommend_3.save && params[:shop_name_3] != "undefined"
            recommend_3.shop = Shop.create(
              name: params[:shop_name_3],
              googlemap_link: params[:shop_googlemap_link_3],
              prefecture: params[:shop_prefecture_3]
            )
          else
            @collection.destroy
          end
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
                reco_image: recommend.reco_image_url(:thumb),
                shop: {
                  name: recommend.shop.name,
                  googlemap_link: recommend.shop.googlemap_link,
                  prefecture: recommend.shop.prefecture
                }
              }
            )
          end
          @collections.push({
            title: collection.title,
            description: collection.description,
            tags: collection.tag_list,
            recommends: shopIncludingRecommends
          })
        end

        render json: @collections
      end

      def tagged
        collections = Collection.tagged_with(params[:tag]).order(created_at: "DESC").includes(recommends: :shop).references(:recommends, :shop)
        @collections = []
        collections.each do |collection|
          shopIncludingRecommends = []
          collection.recommends.each do |recommend|
            shopIncludingRecommends.push(
              {
                name: recommend.name,
                price: recommend.price,
                reco_image: recommend.reco_image_url(:thumb),
                shop: {
                  name: recommend.shop.name,
                  googlemap_link: recommend.shop.googlemap_link,
                  prefecture: recommend.shop.prefecture
                }
              }
            )
          end
          @collections.push({
            title: collection.title,
            description: collection.description,
            tags: collection.tag_list,
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
