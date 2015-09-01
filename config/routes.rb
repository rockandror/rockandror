Rails.application.routes.draw do
  
  root 'welcome#home'

  post 'contact', controller: 'contact', action: 'create', as: 'contacts'

 end