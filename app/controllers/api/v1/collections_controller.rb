class Api::V1::CollectionsController < ApplicationController
  def create

  end

  private

    def collection_params
      params.require(:collection).permit(
        :title,
        recommend: [
          :name,
          :price
          shop: [
            :name,
            :googlemap_link
          ]
        ]
      )
    end
end
