Rails.application.routes.draw do
  get '/place/:input', to: 'place_api#show'
  namespace 'api' do
    namespace 'v1' do
      resources :shops
    end
  end
end
