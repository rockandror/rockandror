Rails.application.routes.draw do

  get 'pages/boatjump'

  root 'welcome#home'
  get '/boatjump', to: 'welcome#boatjump', as: :boatjump
  get '/webdings', to: 'welcome#webdings', as: :webdings
  get '/eatbooking', to: 'welcome#eatbooking', as: :eatbooking
  get '/oasiscatamaran', to: 'welcome#oasiscatamaran', as: :oasiscatamaran
  resources :contact, only: [:new,:create]
  get '/greetings', to: 'contact#greetings', as: :greetings

  get '/best_tools', to: 'best_tools#index', as: :best_tools
  get '/agile_development', to: 'agile_development#index', as: :agile_development
  get '/open_source', to: 'open_source#index', as: :open_source
  get '/team', to: 'team#index', as: :team
  get '/works', to: 'works#index', as: :works
  
  if Rails.env.development?
    mount LetterOpenerWeb::Engine, at: "/devel/emails"
  end

end
