class ThingsController < ApplicationController
  def index
    render json: {
      things: [
        { name: 'Camiseta', price: '12.30' },
        { name: 'Octaveta', price: '0' }
      ]
    }
  end
end
