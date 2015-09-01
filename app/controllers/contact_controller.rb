class ContactController < ApplicationController

  def create
    @contact = Contact.new(contact_params)
    if @contact.valid?
      # UserMailer.contact_confirmation(@contact)
      redirect_to root_path, notice: "Gracias por contactar con nosotros. Le atenderemos en cuanto sea posible."
    else
      debugger
      render "welcome/home"
    end    
  end

  private

  def contact_params
    params.require(:contact).permit([:name, :email, :message])
  end

end