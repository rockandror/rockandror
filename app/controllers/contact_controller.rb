class ContactController < ApplicationController

  def create
    @contact = Contact.new(contact_params)
    if @contact.valid?
      ContactMailer.notification(@contact).deliver_now
      redirect_to root_path, notice: "Gracias por contactar con nosotros. Le atenderemos en cuanto sea posible."
    else
        flash.now[:alert]= "errores en el formulario"
        render "welcome/home"
       # redirect_to root_path, alert: "Hubo errores en el formulario"


    end    
  end

  private

  def contact_params
    params.require(:contact).permit([:name, :email, :message])
  end

end