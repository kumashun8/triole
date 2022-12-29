class ChangeTypeOfCollectionTitle < ActiveRecord::Migration[5.2]
  def change
    change_column :collections, :title, :string
  end
end
