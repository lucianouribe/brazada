class Api::HorariosController < ApplicationController
  before_action :set_api_horario, only: [:show, :edit, :update, :destroy]
  skip_before_action :authenticate_user!, only: [:index]
  
  # GET /api/horarios.json
  def index
    @api_horarios = Api::Horario.all
  end

  # GET /api/horarios/1.json
  def show
  end

  # GET /api/horarios/new
  # def new
  #   @api_horario = Api::Horario.new
  # end

  def new
    @api_cursos = Api::Curso.all.map { |r| [r.nombre, r.tipo_curso, r.id] }
    @api_profesors = Api::Profesor.all.map { |i| [i.nombre, i.apellido, i.id] }
    if @api_cursos.any?
      if @api_profesors.any?
        @api_horario = Api::Horario.new
      else
        # flash[:error] = 'No patients, you have to find sick people somewhere'
      end
    else
      # redirect_to new_doctor_path, error: "No doctors, you have to find at least one of them somewhere"
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
    @api_horario = Api::Horario.new(api_horario_params)

    respond_to do |format|
      if @api_horario.save
        format.json { render :show, status: :created, location: @api_horario }
      else
        format.json { render json: @api_horario.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /api/horarios/1.json
  def update
    respond_to do |format|
      if @api_horario.update(api_horario_params)
        format.json { render :show, status: :ok, location: @api_horario }
      else
        format.json { render json: @api_horario.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /api/horarios/1.json
  def destroy
    @api_horario.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end


  def destroy
    horario = Horario.find(params[:id])
    horario.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_horario
      @api_horario = Api::Horario.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def api_horario_params
      params.require(:horario).permit(:curso_id, :profesor_id, :dia, :hora)
    end
end
