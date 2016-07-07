class ContactController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)
    if @contact.valid?
      ContactMailer.notification(@contact).deliver_now
      redirect_to greetings_path
    else
      render "contact/new"
    end    
  end

  def greetings
  end

  private

  def contact_params
    params.require(:contact).permit([:name, :email, :message])
  end

end