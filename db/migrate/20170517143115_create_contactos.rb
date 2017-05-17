class CreateContactos < ActiveRecord::Migration[5.0]
  def change
    create_table :contactos do |t|
      t.string :nombre
      t.string :correo
      t.text :mensaje

      t.timestamps
    end
  end
end
