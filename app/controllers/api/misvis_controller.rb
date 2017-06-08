class Api::MisvisController < ApplicationController
  before_action :set_api_misvi, only: [:show, :edit, :update, :destroy]

  # GET /api/misvis
  # GET /api/misvis.json
  def index
    @api_misvis = Api::Misvi.all
  end

  # GET /api/misvis/1
  # GET /api/misvis/1.json
  def show
  end

  # GET /api/misvis/new
  def new
    @api_misvi = Api::Misvi.new
  end

  # GET /api/misvis/1/edit
  def edit
  end

  # POST /api/misvis
  # POST /api/misvis.json
  def create
    @api_misvi = Api::Misvi.new(api_misvi_params)

    respond_to do |format|
      if @api_misvi.save
        format.html { redirect_to @api_misvi, notice: 'Misvi was successfully created.' }
        format.json { render :show, status: :created, location: @api_misvi }
      else
        format.html { render :new }
        format.json { render json: @api_misvi.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /api/misvis/1
  # PATCH/PUT /api/misvis/1.json
  def update
    respond_to do |format|
      if @api_misvi.update(api_misvi_params)
        format.html { redirect_to @api_misvi, notice: 'Misvi was successfully updated.' }
        format.json { render :show, status: :ok, location: @api_misvi }
      else
        format.html { render :edit }
        format.json { render json: @api_misvi.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /api/misvis/1
  # DELETE /api/misvis/1.json
  def destroy
    @api_misvi.destroy
    respond_to do |format|
      format.html { redirect_to api_misvis_url, notice: 'Misvi was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_misvi
      @api_misvi = Api::Misvi.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def api_misvi_params
      params.fetch(:api_misvi, {})
    end
end
