class CreateProfesors < ActiveRecord::Migration[5.0]
  def change
    create_table :profesors do |t|
      t.string :nombre, null: false
      t.string :apellido, null: false
      t.string :especialidad
      t.integer :no_clases
      t.integer :salario

      t.timestamps
    end
  end
end
