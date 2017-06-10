require 'pry'
Rails.application.routes.draw do
  root 'home#index'

  devise_for :users, controllers: {
    registrations: 'api/registrations',
    sessions: 'api/sessions'
  }

  namespace :api do
    get 'users/info'
    resources :cursos
    resources :profesors
    resources :horarios
    resources :tarifas
    post 'contacto', to: 'contactos#create_mail'
    post 'responder', to: 'responders#create_response_mail'
    # post 'happy_newsmessage', to: 'happy_newsmessages#send_happy_birthday_mail'
    post 'alumno', to: 'alumno#felicitaciones_mail'
    post 'alumno', to: 'alumno#promocion_mail'
    resources :contactos
    resources :alumnos
    resources :misvis

    # resources :horarios, only: [:new, :create, :destroy]
  end

  get '*unmatched_route', to: 'home#index'
end
