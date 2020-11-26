class Consul::ContactsController < ApplicationController
  invisible_captcha only: :create,
                    honeypot: :subject,
                    on_spam: :redirect_spam,
                    on_timestamp_spam: :redirect_timestamp_spam
  respond_to :js

  def create
    @contact = Contact.new(contact_params)
    if @contact.valid?
      ContactMailer.consul_notification(@contact).deliver_now
      flash.now[:notice] = t(".notice")
      @contact = Contact.new
    end
  end

  private

  def contact_params
    params.require(:contact).permit([:name, :email, :message])
  end

  def redirect_spam
    flash.now[:notice] = t(".notice")
    @contact = Contact.new
    render :create
  end

  def redirect_timestamp_spam
    flash.now[:alert] = t("invisible_captcha.timestamp_error_message")
    @contact = Contact.new
    render :create
  end
end
