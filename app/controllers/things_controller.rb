class ThingsController < ApplicationController
  def index
    render json: { things: Thing.all }
  end

  def create
    @thing = Thing.create(name: params[:name], price: params[:price]).save
    
    render json: {status: 200, thing: @thing}
  end
end
