class Curso < ApplicationRecord
  validates_presence_of :nombre, :tipo_curso

  # has_many horarios, dependent: :destroy
  # has_many profesors, through: :horarios
  # has_many tarifas
end
