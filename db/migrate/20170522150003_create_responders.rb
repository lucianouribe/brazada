class CreateResponders < ActiveRecord::Migration[5.0]
  def change
    create_table :responders do |t|
      t.string :nombre, null: false
      t.string :correo, null: false
      t.text :mensaje, null: false

      t.timestamps
    end
  end
end
