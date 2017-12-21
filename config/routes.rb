Rails.application.routes.draw do

  get 'pages/boatjump'

  root 'welcome#home'

  get '/boatjump', to: 'pages#boatjump', as: :boatjump
  get '/webdings', to: 'pages#webdings', as: :webdings
  get '/eatbooking', to: 'pages#eatbooking', as: :eatbooking
  get '/oasiscatamaran', to: 'pages#oasiscatamaran', as: :oasiscatamaran
  get '/best_tools', to: 'pages#best_tools', as: :best_tools
  get '/agile_development', to: 'pages#agile_development', as: :agile_development
  get '/open_source', to: 'pages#open_source', as: :open_source
  get '/team', to: 'pages#team', as: :team
  get '/works', to: 'pages#works', as: :works
  resources :contact, only: [:new,:create]
  get '/greetings', to: 'contact#greetings', as: :greetings

  if Rails.env.development?
    mount LetterOpenerWeb::Engine, at: "/devel/emails"
  end

end
