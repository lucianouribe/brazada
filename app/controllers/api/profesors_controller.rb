class Api::ProfesorsController < ApplicationController
  before_action :set_api_profesor, only: [:show, :edit, :update, :destroy]

  # GET /api/profesors.json
  def index
    @api_profesors = Api::Profesor.all
  end

  # GET /api/profesors/1.json
  def show
  end

  # GET /api/profesors/new
  def new
    @api_profesor = Api::Profesor.new
  end

  # GET /api/profesors/1/edit
  def edit
  end

  # POST /api/profesors.json
  def create
    @api_profesor = Api::Profesor.new(api_profesor_params)

    respond_to do |format|
      if @api_profesor.save
        format.json { render :show, status: :created, location: @api_profesor }
      else
        format.json { render json: @api_profesor.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /api/profesors/1.json
  def update
    respond_to do |format|
      if @api_profesor.update(api_profesor_params)
        format.json { render :show, status: :ok, location: @api_profesor }
      else
        format.json { render json: @api_profesor.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /api/profesors/1.json
  def destroy
    @api_profesor.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_profesor
      @api_profesor = Api::Profesor.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def api_profesor_params
      params.require(:profesor).permit(:nombre, :apellido, :especialidad, :no_clases, :salario)
    end
end
