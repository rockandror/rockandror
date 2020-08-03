Rails.application.routes.draw do

  root 'welcome#home'
  get '/boatjump', to: 'welcome#boatjump', as: :boatjump
  get '/webdings', to: 'welcome#webdings', as: :webdings
  get '/eatbooking', to: 'welcome#eatbooking', as: :eatbooking
  get '/oasiscatamaran', to: 'welcome#oasiscatamaran', as: :oasiscatamaran
  resources :contacts, only: [:new, :create]
  get '/greetings', to: 'contacts#show', as: :greetings
  get '/consul/budget', to: 'budget#new', as: :consul_budget

  if Rails.env.development?
    mount LetterOpenerWeb::Engine, at: "/devel/emails"
  end

end
