module Api
  module V1
    class RecommendsController < ApplicationController
      def create
        @recommend = Recommend.new
        @recommend.reco_image = params[:reco_image]
        @recommend.name = params[:name]
        @recommend.price = params[:price]
        @recommend.collection = Collection.first

        if @recommend.save
          render json: @recommend
        end
      end
    end
  end
end
