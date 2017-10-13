require 'pry'
class Api::CursosController < ApplicationController
  before_action :set_api_curso, only: [:show, :edit, :update, :destroy]
  skip_before_action :authenticate_user!, only: [:index]

  # GET /api/cursos.json
  def index
    @api_cursos = Curso.order_by_nombre.all
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
    Curso.upload_image(params)
    new_params = { nombre: params[:nombre], tipo_curso: params[:tipo_curso], lugar: params[:lugar], descripcion: params[:descripcion], url_direccion: params[:url_direccion]}
    @api_curso = Curso.new(new_params)
    # binding.pry
    if @api_curso.save
      render :show, status: :created
    else
      render json: @api_curso.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/cursos/1.json
  def update
    if params[:avatar] != 'undefined'
      Curso.upload_image(params)
    end
    new_params = { nombre: params[:nombre], tipo_curso: params[:tipo_curso], lugar: params[:lugar], descripcion: params[:descripcion], url_direccion: params[:url_direccion]}
    # binding.pry
    respond_to do |format|
      if @api_curso.update(new_params)
        # binding.pry
        format.json { render :show, status: :ok }
      else
        format.json { render json: @api_curso.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /api/cursos/1.json
  def destroy
    info_from_pic = @api_curso
    Curso.delete_me(info_from_pic)
    @api_curso.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    def set_api_curso
      @api_curso = Curso.find(params[:id])
    end

    def api_curso_params
      params.require(:curso).permit(:nombre, :tipo_curso, :lugar, :descripcion, :url_direccion, :avatar)
    end
end
