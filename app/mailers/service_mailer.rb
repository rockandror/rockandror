class ServiceMailer < ActionMailer::Base

  def notification(service)
    @service = service
    mail( from: "#{service.name} <#{service.email}>",
          to: "<info@rockandror.com>",
          subject: "#{service.name} ha enviado un presupuesto de Consul desde la web" )
  end

end
