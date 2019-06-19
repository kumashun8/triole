Rails.application.routes.draw do
  get '/place', to: 'place_api#show'
  resources :shops
end
