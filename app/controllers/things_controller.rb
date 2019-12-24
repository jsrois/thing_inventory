class ThingsController < ApplicationController
  def index
    render json: { things: Thing.all }
  end
end
