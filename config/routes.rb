Rails.application.routes.draw do
  
  get '/api/v1/things', to: 'things#index'
  post '/new', to: 'things#create'
  
  root "homepage#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
