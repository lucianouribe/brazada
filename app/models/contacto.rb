require 'pry'
class Contacto < ApplicationRecord

  def self.order_by_id
    # binding.pry
    Contacto.order("id ASC")
  end

end
