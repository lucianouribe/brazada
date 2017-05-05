Rails.application.routes.draw do
  root 'home#index'

  devise_for :users, controllers: {
    registrations: 'api/registrations',
    sessions: 'api/sessions'
  }

  namespace :api do
    get 'users/info'
    resources :cursos
  end

  get '*unmatched_route', to: 'home#index'
end
