class Consul::ContactsController < ApplicationController
  respond_to :js

  def create
    @contact = Contact.new(contact_params)
    if @contact.valid?
      ContactMailer.notification(@contact).deliver_now
      flash.now[:notice] = t(".notice")
      @contact = Contact.new
    end
  end

  private

  def contact_params
    params.require(:contact).permit([:name, :email, :message])
  end
end
