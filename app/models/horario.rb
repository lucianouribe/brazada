require 'pry'
class Horario < ApplicationRecord
  validates_presence_of :curso_id, :profesor_id, :dia, :hora, :minutos, :posicion, :duracion, :calendario

  belongs_to :curso
  belongs_to :profesor

end
