class CreateTarifas < ActiveRecord::Migration[5.0]
  def change
    create_table :tarifas do |t|
      t.string :plan, null: false
      t.string :nombre, null: false
      t.integer :valor, null: false
      t.string :descripcion

      t.timestamps
    end
  end
end
