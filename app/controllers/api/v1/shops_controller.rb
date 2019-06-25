module Api
  module V1
    class ShopsController < ApplicationController
      require 'net/http'
      require 'uri'
      require 'json'

      def index
        @shops = Shop.all
        render json: @shops
      end
    
      def create
        @shop = Shop.new(shop_params)
        render json: @shop
      end
    
      def search
        
      end

      private
    
        def shop_params
          params.require(:shop).permit(:name. :googlemap_link)
        end
      
    end
  end
end
