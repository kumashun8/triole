class AddDescriptionToCollection < ActiveRecord::Migration[5.2]
  def change
    add_column :collections, :description, :text
  end
end
