class Profesor < ApplicationRecord
  validates_presence_of :nombre, :apellido

  # has_many horarios, dependent: :destroy
  # has_many cursos, through: :horarios
end
