Rails.application.routes.draw do

  root 'welcome#home'
  get '/boatjump', to: 'welcome#boatjump', as: :boatjump
  get '/webdings', to: 'welcome#webdings', as: :webdings
  get '/eatbooking', to: 'welcome#eatbooking', as: :eatbooking
  get '/oasiscatamaran', to: 'welcome#oasiscatamaran', as: :oasiscatamaran
  resources :contacts, only: [:new, :create]
  get '/greetings', to: 'contacts#show', as: :greetings
  get '/consul/budget', to: redirect("/consul/development_services")
  get "/consul/development-services", to: "welcome#consul", as: :consul_development_services

  namespace :consul do
    resources :contacts, only: :create
  end

  if Rails.env.development?
    mount LetterOpenerWeb::Engine, at: "/devel/emails"
  end

end
