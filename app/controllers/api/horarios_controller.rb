require 'pry'
class Api::HorariosController < ApplicationController
  before_action :set_api_horario, only: [:show, :edit, :update, :destroy]
  skip_before_action :authenticate_user!, only: [:index]

  # GET /api/horarios.json
  def index
    @api_horarios = Horario.all.order(:hora)
  end

  # GET /api/horarios/1.json
  def show
  end

  # GET /api/horarios/new
  # def new
  #   @api_horario = Horario.new
  # end

  def new
    @api_cursos = Curso.all.map { |c| [c.nombre, c.tipo_curso, c.lugar, c.duracion, c.id] }
    @api_profesors = Profesor.all.map { |pr| [pr.nombre, pr.apellido, pr.id] }
    if @api_cursos.any?
      if @api_profesors.any?
        @api_horario = Horario.new
      end
    end
  end

  # GET /api/horarios/1/edit
  def edit
  end

  # def create
  #   @api_horario = Horario.new(api_horario_params)
  #   if @appointment.save
  #     flash[:success] = 'Appointment Created'
  #     redirect_to :back
  #   else
  #     render :new
  #   end
  # end

  # POST /api/horarios.json
  def create
    @api_horario = Horario.new(api_horario_params)
    if @api_horario.save
      render :show, status: :created
    else
      render json: @api_horario.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/horarios/1.json
  def update
    respond_to do |format|
      if @api_horario.update(api_horario_params)
        format.json { render :show, status: :ok }
      else
        format.json { render json: @api_horario.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /api/horarios/1.json
  # def destroy
  #   @api_horario.destroy
  #   respond_to do |format|
  #     format.json { head :no_content }
  #   end
  # end


  def destroy
    horario = Horario.find(params[:id])
    horario.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_horario
      # binding.pry
      @api_horario = Horario.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def api_horario_params
      params.require(:horario).permit(:curso_id, :profesor_id, :dia, :hora, :minutos, :posicion, :calendario, :duracion)
    end
end
