class Horario < ApplicationRecord
  validates_presence_of :dia, :hora
  
  belongs_to :curso
  belongs_to :profesor
end
