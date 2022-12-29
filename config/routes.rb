Rails.application.routes.draw do
  root to: 'home#index'
  namespace 'api' do
    namespace 'v1' do
      get '/tagged/:tag', to: 'collections#tagged' 
      resources :shops
      resources :collections, only: [:create, :index]
      resources :recommends
      get '/search/:text', to: 'shops#search'
      get '/detail/:place_id', to: 'shops#detail'
    end
  end
end
