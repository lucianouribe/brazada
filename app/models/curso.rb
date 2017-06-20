class Curso < ApplicationRecord
  validates_presence_of :nombre, :tipo_curso
  validates_inclusion_of :tipo_curso, in: %w(natacion gimnasio hidro mente)

  # has_many horarios, dependent: :destroy
  # has_many profesors, through: :horarios
  # has_many tarifas
end
