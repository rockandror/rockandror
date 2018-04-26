require "rails_helper"

describe BudgetMailer do

  describe "notification" do

    let(:budget) { Budget.new(name: "Name", email: "email@example.com", message: "message") }
    let(:mail)    { BudgetMailer.notification(budget) }

    it "send mail to budget email" do
      expect(mail.to).to eq(["info@rockandror.com"])
    end

    it "send mail from budget email" do
      expect(mail.from).to eq(["email@example.com"])
    end

    it "send mail with subject" do
      expect(mail.subject).to eq("#{budget.name} ha enviado un presupuesto de Consul desde la web")
    end

    it "send mail with budget message" do
      expect(mail.body).to have_content("#{budget.message}")
    end
  end
end
