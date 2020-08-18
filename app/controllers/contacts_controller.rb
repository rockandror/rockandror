class ContactsController < ApplicationController
  invisible_captcha only: :create,
                    honeypot: :subject,
                    on_spam: :redirect_spam,
                    on_timestamp_spam: :redirect_timestamp_spam
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

  def redirect_spam
    flash[:notice] = t(".notice")
    return redirect_to greetings_path
  end

  def redirect_timestamp_spam
    flash[:alert] = t("invisible_captcha.timestamp_error_message")
    return new_contact_path
  end
end
