class Api::ProfesorsController < ApplicationController
  before_action :set_api_profesor, only: [:show, :edit, :update, :destroy]
  skip_before_action :authenticate_user!, only: [:index]

  def index
    @api_profesors = Profesor.all
  end

  def show
  end

  def new
    @api_profesor = Profesor.new
  end

  def edit
  end

  def create
    @api_profesor = Profesor.new(api_profesor_params)

    respond_to do |format|
      if @api_profesor.save
        format.json { render :show, status: :created }
      else
        format.json { render json: @api_profesor.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @api_profesor.update(api_profesor_params)
        format.json { render :show, status: :ok }
      else
        format.json { render json: @api_profesor.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @api_profesor.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    def set_api_profesor
      @api_profesor = Profesor.find(params[:id])
    end

    def api_profesor_params
      params.require(:profesor).permit(:nombre, :apellido, :especialidad, :cual_curso, :no_clases, :salario)
    end
end
