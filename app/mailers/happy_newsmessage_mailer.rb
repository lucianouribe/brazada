require 'pry'
class HappyNewsmessageMailer < ApplicationMailer

  default from: ENV['MAIL_FROM']

  def felicitaciones(alumno)
    @alumno = alumno
    # binding.pry
    mail(to: @alumno.correo, subject: 'Feliz cumpleaños te desea la Academia Brazada' )
  end

  def promocion(alumno, tiempo)
    @alumno = alumno
    @tiempo = tiempo
    # binding.pry
    mail(to: @alumno.correo, subject: 'Ya llevas un año con nosotros!')
  end

end
