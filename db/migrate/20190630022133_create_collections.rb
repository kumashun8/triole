class CreateCollections < ActiveRecord::Migration[5.2]
  def change
    create_table :collections do |t|
      t.text :title
      t.integer :budget
      t.timestamps
    end
  end
end
