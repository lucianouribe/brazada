require 'pry'
class Api::RespondersController < ApplicationController

  def create_response_mail
    responder = Responder.create(api_responder_params)
    ResponderMailer.nueva_respuesta(responder).deliver
  end

  private

  def api_responder_params
    params.require(:responder).permit(:nombre, :correo, :mensaje)
  end

end
