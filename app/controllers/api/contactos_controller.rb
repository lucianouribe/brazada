require 'pry'
class Api::ContactosController < ApplicationController
  skip_before_action :verify_authenticity_token
  skip_before_action :authenticate_user!
  before_action :set_api_contacto, only: [:show, :edit, :update, :destroy]

  def index
    @api_contacto = Contacto.order_by_id.all
  end

  def show
    # binding.pry
  end

  def new
    @api_contacto = Contacto.new
  end

  def edit
  end

  # def create
  #   binding.pry
  #   @api_contacto = Contacto.new(api_contacto_params)
  #   if @api_contacto.save
  #     render :show, status: :created }
  #   else
  #     render json: @api_contacto.errors, status: :unprocessable_entity }
  #   end
  # end

  def update
    respond_to do |format|
      if @api_contacto.update(api_contacto_params)
        format.json { render :show, status: :ok }
      else
        format.json { render json: @api_contacto.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @api_contacto.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  def create_mail
    # binding.pry
    contacto = Contacto.create(api_contacto_params)
    ContactoMailer.nuevo_mensaje(contacto).deliver
  end

  private

    def set_api_contacto
      # binding.pry
      @api_contacto = Contacto.find(params[:id])
    end

    def api_contacto_params
      # binding.pry
      params.require(:contacto).permit(:nombre, :correo, :mensaje, :leido, :importancia)
    end

end
