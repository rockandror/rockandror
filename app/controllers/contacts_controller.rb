class ContactsController < ApplicationController
  respond_to :html

  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)
    if @contact.valid?
      ContactMailer.notification(@contact).deliver_now
      flash[:notice] = t(".notice")
      redirect_to greetings_path
    else
      render :new
    end
  end

  def show
  end

  private

  def contact_params
    params.require(:contact).permit([:name, :email, :message])
  end
end
