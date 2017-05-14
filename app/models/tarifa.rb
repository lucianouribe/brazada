class Tarifa < ApplicationRecord
  validates_presence_of :plan, :nombre, :valor
end
