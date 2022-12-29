module Api
  module V1
    class ShopsController < ApplicationController
      def index
        @shops = Shop.all
        render json: @shops
      end
    
      def create
        @shop = Shop.new(shop_params)
        render json: @shop
      end
    
      def search   
        @shop_list = []
    
        if params[:text]
          uuid = SecureRandom.uuid
          request = "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=" + params[:text] + "&types=establishment&location=34.68291,134.87708&language=ja&radius=1000000&strictbounds&types=establishment&key=" + ENV['API_KEY'] + "&sessiontoken=" + uuid
          uri = URI.encode(request)
          uri = URI.parse(uri)
          response = Net::HTTP.post_form(uri, {})
          @shop_list = response.body
        end
    
        render json: @shop_list
      end

      def detail
        request = "https://maps.googleapis.com/maps/api/place/details/json?placeid=" + params[:place_id] + "&fields=name,url,address_components&language=ja&key=" + ENV['API_KEY']
        uri = URI.encode(request)
        uri = URI.parse(uri)
        response = Net::HTTP.post_form(uri, {})

        render json: response.body
      end

      private
    
        def shop_params
          params.require(:shop).permit(:name, :googlemap_link)
        end
      
    end
  end
end
