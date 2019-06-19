Rails.application.routes.draw do
  get '/place/:input', to: 'place_api#show'
  resources :shops
end
