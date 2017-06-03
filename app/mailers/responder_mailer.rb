require 'pry'
class ResponderMailer < ApplicationMailer
  default from: ENV['MAIL_FROM']

  def nueva_respuesta(responder)
    @responder = responder
    # binding.pry
    mail(to: @responder.correo, subject: @responder.nombre )
  end

end