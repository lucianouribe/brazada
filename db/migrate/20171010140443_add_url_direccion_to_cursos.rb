class AddUrlDireccionToCursos < ActiveRecord::Migration[5.0]
  def change
    add_column :cursos, :url_direccion, :string
  end
end
