class CreateCursos < ActiveRecord::Migration[5.0]
  def change
    create_table :cursos do |t|
      t.string :nombre, null: false
      t.string :tipo_curso, null: false
      t.text :descripcion
      t.string :horarios
      t.string :lugar
      t.string :profesores
      t.string :instalaciones

      t.timestamps
    end
  end
end
