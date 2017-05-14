class CreateCursos < ActiveRecord::Migration[5.0]
  def change
    create_table :cursos do |t|
      t.string :nombre, null: false
      t.string :tipo_curso, null: false
      t.string :lugar
      t.text :descripcion
      t.float :duracion

      t.timestamps
    end
  end
end
