class Api::TarifasController < ApplicationController
  before_action :set_api_tarifa, only: [:show, :edit, :update, :destroy]

  # GET /api/tarifas.json
  def index
    @api_tarifas = Api::Tarifa.all
  end

  # GET /api/tarifas/1.json
  def show
  end

  # GET /api/tarifas/new
  def new
    @api_tarifa = Api::Tarifa.new
  end

  # GET /api/tarifas/1/edit
  def edit
  end

  # POST /api/tarifas.json
  def create
    @api_tarifa = Api::Tarifa.new(api_tarifa_params)

    respond_to do |format|
      if @api_tarifa.save
        format.json { render :show, status: :created, location: @api_tarifa }
      else
        format.json { render json: @api_tarifa.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /api/tarifas/1.json
  def update
    respond_to do |format|
      if @api_tarifa.update(api_tarifa_params)
        format.json { render :show, status: :ok, location: @api_tarifa }
      else
        format.json { render json: @api_tarifa.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /api/tarifas/1.json
  def destroy
    @api_tarifa.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_tarifa
      @api_tarifa = Api::Tarifa.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def api_tarifa_params
      params.require(:profesor).permit(:plan, :nombre, :valor, :descripcion)
    end
end
