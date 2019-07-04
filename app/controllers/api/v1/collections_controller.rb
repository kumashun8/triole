module Api
  module V1
    class Api::V1::CollectionsController < ApplicationController
      def create
        @collection = Collection.create(collection_params)
        render json: @collection
      end
    
      def index
        @collections = Collection.all
        render json: @collections
      end
    
      private
    
        def collection_params
          params.require(:collection).permit(
            :title
            # recommend: [
            #   :name,
            #   :price
            #   shop: [
            #     :name,
            #     :googlemap_link
            #   ]
            # ]
          )
        end
    end
  end
end
