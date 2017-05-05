class Api::CursosController < ApplicationController
  before_action :set_api_curso, only: [:show, :edit, :update, :destroy]

  # GET /api/cursos
  # GET /api/cursos.json
  def index
    @api_cursos = Api::Curso.all
  end

  # GET /api/cursos/1
  # GET /api/cursos/1.json
  def show
  end

  # GET /api/cursos/new
  def new
    @api_curso = Api::Curso.new
  end

  # GET /api/cursos/1/edit
  def edit
  end

  # POST /api/cursos
  # POST /api/cursos.json
  def create
    @api_curso = Api::Curso.new(api_curso_params)

    respond_to do |format|
      if @api_curso.save
        format.html { redirect_to @api_curso, notice: 'Curso was successfully created.' }
        format.json { render :show, status: :created, location: @api_curso }
      else
        format.html { render :new }
        format.json { render json: @api_curso.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /api/cursos/1
  # PATCH/PUT /api/cursos/1.json
  def update
    respond_to do |format|
      if @api_curso.update(api_curso_params)
        format.html { redirect_to @api_curso, notice: 'Curso was successfully updated.' }
        format.json { render :show, status: :ok, location: @api_curso }
      else
        format.html { render :edit }
        format.json { render json: @api_curso.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /api/cursos/1
  # DELETE /api/cursos/1.json
  def destroy
    @api_curso.destroy
    respond_to do |format|
      format.html { redirect_to api_cursos_url, notice: 'Curso was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_curso
      @api_curso = Api::Curso.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def api_curso_params
      params.fetch(:api_curso, {})
    end
end
