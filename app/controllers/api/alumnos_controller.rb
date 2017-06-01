require 'pry'
class Api::AlumnosController < ApplicationController
  before_action :set_api_alumno, only: [:show, :edit, :update, :destroy]


  def index
    @api_alumnos = Alumno.all
    # hoy = Date.today
    # ago = Date.today.year - 1
    #
    # @api_alumnos.each do |i|
    #   if i.fecha_nacimiento.month == hoy.month
    #     if i.fecha_nacimiento.day == hoy.day
    #       motivo = 'cumple'
    #       tiempo = ''
    #       felicitaciones_mail(i, motivo, tiempo)
    #     end
    #   elsif i.fecha_matriculacion.month == hoy.month
    #     if i.fecha_matriculacion.day == hoy.day
    #       motivo = 'promo'
    #       tiempo = Date.today.year - i.fecha_matriculacion.year
    #       felicitaciones_mail(i, motivo, tiempo)
    #     end
    #   end
    # end

  end

  def show
  end

  def new
    @api_alumno = Alumno.new
  end

  def edit
  end

  def create
    @api_alumno = Alumno.new(api_alumno_params)

    respond_to do |format|
      if @api_alumno.save
        format.json { render :show, status: :created}
      else
        format.json { render json: @api_alumno.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @api_alumno.update(api_alumno_params)
        # binding.pry
        format.json { render :show, status: :ok }
      else
        format.json { render json: @api_alumno.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @api_alumno.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  # def felicitaciones_mail(alumno, porque, tiempo)
  #   # binding.pry
  #   if porque == 'cumple'
  #     # binding.pry
  #     HappyNewsmessageMailer.felicitaciones(alumno).deliver
  #   else
  #     # binding.pry
  #     HappyNewsmessageMailer.promocion(alumno, tiempo).deliver
  #   end
  # end

  private
    def set_api_alumno
      @api_alumno = Alumno.find(params[:id])
    end

    def api_alumno_params
      params.require(:alumno).permit(
      :primer_nombre,
      :segundo_nombre,
      :primer_apellido,
      :segundo_apellido,
      :cedula,
      :correo,
      :fecha_nacimiento,
      :direccion,
      :telefono,
      :fecha_matriculacion,
      :programa,
      :nivel,
      :estado,
      :genero
      )
    end
end
