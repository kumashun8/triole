class AddRecommendIdToShop < ActiveRecord::Migration[5.2]
  def change
    add_reference :shops, :recommend, foreign_key: true
  end
end
