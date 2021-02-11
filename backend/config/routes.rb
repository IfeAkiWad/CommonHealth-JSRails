Rails.application.routes.draw do
  resources :doctors
  resources :users do
    resources :doctors
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
