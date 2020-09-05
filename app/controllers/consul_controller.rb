class ConsulController < ApplicationController
  def show
    @contact = Contact.new
  end
end
