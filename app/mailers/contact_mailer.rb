class ContactMailer < ActionMailer::Base
  DEFAULT_FROM = "noreply@rockandror.com"
  DEFAULT_RECIPIENT = "<info@rockandror.com>"

  def notification(contact)
    @contact = contact
    mail( from: DEFAULT_FROM,
          to: DEFAULT_RECIPIENT,
          subject: "#{contact.name} ha enviado una solicitud desde la web" )
  end

  def consul_notification(contact)
    @contact = contact
    mail( from: DEFAULT_FROM,
          to: consul_recipients,
          subject: "#{contact.name} ha enviado una solicitud desde la web" )
  end

  private

  def consul_recipients
    return DEFAULT_RECIPIENT if ENV["CONSUL_RECIPIENTS"].blank?

    [DEFAULT_RECIPIENT] + ENV["CONSUL_RECIPIENTS"].split(",")
  end
end
