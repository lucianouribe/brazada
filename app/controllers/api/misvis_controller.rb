require 'pry'
class Api::MisvisController < ApplicationController
  before_action :set_api_misvi, only: [:show, :edit, :update, :destroy]
  skip_before_action :authenticate_user!, only: [:index]

  def index
    @api_misvis = Misvi.all
  end

  def show
  end

  def new
    @api_misvi = Misvi.new
  end

  def edit
  end

  def create
    @api_misvi = Misvi.new(api_misvi_params)
    if @api_misvi.save
      render :show, status: :created
    else
      render json: @api_misvi.errors, status: :unprocessable_entity
    end
  end

  def update
    if @api_misvi.update(api_misvi_params)
      render :show, status: :ok
    else
      render json: @api_misvi.errors, status: :unprocessable_entity
    end
  end


  def destroy
    @api_misvi.destroy
    head :no_content
  end

  private
    def set_api_misvi
      @api_misvi = Misvi.find(params[:id])
    end

    def api_misvi_params
      params.require(:misvi).permit(:titulo, :articulo)
    end
end
