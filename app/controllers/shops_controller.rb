class ShopsController < ApplicationController
  def index
    @shops = Shop.all
    render json: @shops
  end

  def create
    @shop = Shop.new(shop_params)
    render json: @shop
  end

  private

    def shop_params
      params.require(:shop).permit(:name. :googlemap_link)
    end
  
end
