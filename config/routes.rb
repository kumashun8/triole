Rails.application.routes.draw do
  namespace 'api' do
    namespace 'v1' do
      resources :shops
      resources :collections
      resources :recommends
      get '/search/:text', to: 'shops#search'
      get '/detail/:place_id', to: 'shops#detail'
    end
  end
end
