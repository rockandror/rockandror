class WelcomeController < ApplicationController

  def home
    @contact = Contact.new
  end

end