require 'pry'
class Api::TarifasController < ApplicationController
  before_action :set_api_tarifa, only: [:show, :edit, :update, :destroy]
  skip_before_action :authenticate_user!, only: [:index]

  def index
    @api_tarifas = Tarifa.all
  end

  def show
  end

  def new
    @api_tarifa = Tarifa.new
  end

  def edit
  end

  def create
    @api_tarifa = Tarifa.new(api_tarifa_params)

    respond_to do |format|
      if @api_tarifa.save
        format.json { render :show, status: :created }
      else
        format.json { render json: @api_tarifa.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @api_tarifa.update(api_tarifa_params)
        format.json { render :show, status: :ok }
      else
        format.json { render json: @api_tarifa.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @api_tarifa.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    def set_api_tarifa
      @api_tarifa = Tarifa.find(params[:id])
    end

    def api_tarifa_params
      params.require(:tarifa).permit(:plan, :nombre, :valor, :descripcion)
    end
end
