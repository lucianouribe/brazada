class Contacto < ApplicationRecord
  def self.order_by_id
    Contacto.order("id ASC")
  end
end
