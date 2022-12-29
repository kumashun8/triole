class AddPrefectureToShop < ActiveRecord::Migration[5.2]
  def change
    add_column :shops, :prefecture, :string, null: false
  end
end
