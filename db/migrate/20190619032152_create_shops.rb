class CreateShops < ActiveRecord::Migration[5.2]
  def change
    create_table :shops do |t|
      t.text :name
      t.text :googlemap_link

      t.timestamps
    end
  end
end
