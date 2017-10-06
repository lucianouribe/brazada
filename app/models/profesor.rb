class Profesor < ApplicationRecord
  validates_presence_of :nombre, :apellido, :cual_curso

  # has_many horarios, dependent: :destroy
  # has_many cursos, through: :horarios
  def self.order_by_nombre
    Profesor.order("nombre ASC")
  end
end
