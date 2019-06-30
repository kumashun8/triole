class CreateRecommends < ActiveRecord::Migration[5.2]
  def change
    create_table :recommends do |t|
      t.string :name
      t.integer :price
      t.text :description

      t.references :collection, foreign_key: true
      t.timestamps
    end
  end
end
