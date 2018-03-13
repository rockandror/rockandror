class BudgetMailer < ActionMailer::Base

  def notification(budget)
    @budget = budget
    mail( from: "#{budget.name} <#{budget.email}>",
          to: "<info@rockandror.com>",
          subject: "#{budget.name} ha enviado un presupuesto de Consul desde la web" )
  end

end
