require 'pry'
class Alumno < ApplicationRecord
  # after_update :set_cumple_alumno
  #
  # def set_cumple_alumno
  #   # binding.pry
  #   delay(:run_at => Time.now).send_mail
  # end

  # def send_mail
  #   hoy = Date.today
  #
  #     if self.fecha_nacimiento.month == hoy.month
  #       if self.fecha_nacimiento.day == hoy.day
  #         binding.pry
  #         motivo = 'cumple'
  #         tiempo = ''
  #         felicitaciones_mail(i, motivo, tiempo)
  #       end
  #     elsif i.fecha_matriculacion.month == hoy.month
  #       if i.fecha_matriculacion.day == hoy.day
  #         motivo = 'promo'
  #         tiempo = Date.today.year - i.fecha_matriculacion.year
  #         felicitaciones_mail(i, motivo, tiempo)
  #       end
  #     end
  #   # binding.pry
  # end
  #
  # def felicitaciones_mail(alumno, porque, tiempo)
  #   binding.pry
  #   if porque == 'cumple'
  #     # binding.pry
  #     HappyNewsmessageMailer.felicitaciones(alumno).deliver
  #   else
  #     # binding.pry
  #     HappyNewsmessageMailer.promocion(alumno, tiempo).deliver
  #   end
  # end
  # handle_asynchronously :send_mail, run_at: Proc.new { 5.minutes.from.now}

end

#
# class Model < ActiveRecord::Base
#
#   after_create :set_expiry_timer
#
#   # register the timer
#   def set_expiry_timer
#     delay(:run_at => expiration_date).expire
#   end
#
#   def expire
#     update_attribute(:is_expired, true) unless is_expired?
#   end
#
# end
