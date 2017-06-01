class CreateAlumnos < ActiveRecord::Migration[5.0]
  def change
    create_table :alumnos do |t|
      t.string :primer_nombre
      t.string :segundo_nombre
      t.string :primer_apellido
      t.string :segundo_apellido
      t.string :cedula
      t.string :correo
      t.date :fecha_nacimiento
      t.string :direccion
      t.string :telefono
      t.date :fecha_matriculacion
      t.string :programa
      t.string :nivel
      t.string :estado
      t.string :genero

      t.timestamps
    end
  end
end
