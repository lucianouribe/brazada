require 'pry'
class Api::ContactosController < ApplicationController

  def create
    # binding.pry
    contacto = Contacto.create(contacto_params)
    ContactoMailer.nuevo_mensaje(contacto).deliver
  end

  private
  def contacto_params
    # binding.pry
    params.require(:contacto).permit(:nombre, :correo, :mensaje)
  end

end
