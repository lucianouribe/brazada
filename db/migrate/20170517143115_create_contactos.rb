class CreateContactos < ActiveRecord::Migration[5.0]
  def change
    create_table :contactos do |t|
      t.string :nombre, null: false
      t.string :correo, null: false
      t.text :mensaje, null: false
      t.boolean :leido, default: false
      t.boolean :importancia, default: false

      t.timestamps
    end
  end
end
