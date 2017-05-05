class Curso < ApplicationRecord
  validates_presence_of :nombre, :tipo_curso
end
