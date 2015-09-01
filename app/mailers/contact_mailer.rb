class ContactMailer < ActionMailer::Base

  def notification(contact)
    @contact = contact
    mail( from: "#{contact.name} <#{contact.email}>",
          to: "<info@rockandror.com>", 
          subject: "#{contact.name} ha enviado una solicitud desde la web" )
  end

end