class ContactsController < ApplicationController
  respond_to :html, :js

  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)
    if @contact.valid?
      ContactMailer.notification(@contact).deliver_now
      flash.now[:notice] = "Gracias por contactar con nosotros. Le responderemos lo antes posible."
    end

    respond_to do |format|
      format.html do
        if @contact.valid?
          redirect_to greetings_path
        else
          render :new
        end
      end
      format.js do
        if @contact.valid?
          @contact = Contact.new
        end
        render :create
      end
    end
  end

  def show
  end

  private

  def contact_params
    params.require(:contact).permit([:name, :email, :message])
  end

end
