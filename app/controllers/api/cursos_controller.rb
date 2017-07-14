require 'pry'
class Api::CursosController < ApplicationController
  before_action :set_api_curso, only: [:show, :edit, :update, :destroy]
  skip_before_action :authenticate_user!, only: [:index]

  # GET /api/cursos.json
  def index
    @api_cursos = Curso.all
  end

  # GET /api/cursos/1.json
  def show
  end

  # GET /api/cursos/new
  def new
    @api_curso = Curso.new
  end

  # GET /api/cursos/1/edit
  def edit
  end

  # POST /api/cursos.json
  def create
    @api_curso = Curso.new(api_curso_params)
    # binding.pry
    if @api_curso.save
      render :show, status: :created
    else
      render json: @api_curso.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/cursos/1.json
  def update
    respond_to do |format|
      if @api_curso.update(api_curso_params)
        # binding.pry
        format.json { render :show, status: :ok }
      else
        format.json { render json: @api_curso.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /api/cursos/1.json
  def destroy
    @api_curso.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_curso
      @api_curso = Curso.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def api_curso_params
      # params.require(:nombre)
      # params.require(:lugar)
      # params.require(:descripcion)
      # params.require(:tipo_curso)
      # params.require(:avatar)
      # binding.pry
      params.require(:curso).permit(:nombre, :tipo_curso, :lugar, :descripcion, :avatar)
    end
end
