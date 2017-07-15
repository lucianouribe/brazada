require 'pry'
class ContactoMailer < ApplicationMailer
  default from: ENV['BMAIL_FROM']

  def nuevo_mensaje(contacto)
    # binding.pry
    # @contacto = contacto
    # mail(to: 'lucianouribe@gmail.com', subject: @contacto.nombre )
  end

end
