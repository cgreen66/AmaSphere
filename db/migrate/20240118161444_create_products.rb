class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.text :description
      t.decimal :price
      t.string :category
      t.string :brand
      t.string :dimensions
      t.string :weight

      t.timestamps
    end
  end
end
