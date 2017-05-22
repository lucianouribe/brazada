require 'pry'
class Api::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def info
    # binding.pry
    unless current_user
      render json: {}
    end
  end

end
