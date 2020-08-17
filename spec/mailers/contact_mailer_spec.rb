require "rails_helper"

describe ContactMailer do

  describe "notification" do

    let(:contact) { Contact.new(name: "Name", email: "email@example.com", message: "message") }
    let(:mail)    { ContactMailer.notification(contact) }

    it "send mail to contact email" do
      expect(mail.to).to eq(["info@rockandror.com"])
    end

    it "send mail from contact email" do
      expect(mail.from).to eq(["noreply@rockandror.com"])
    end

    it "send mail with subject" do
      expect(mail.subject).to eq("#{contact.name} ha enviado una solicitud desde la web")
    end

    it "send mail with contact message" do
      expect(mail.body).to have_content("#{contact.name}")
      expect(mail.body).to have_content("#{contact.email}")
      expect(mail.body).to have_content("#{contact.message}")
    end
  end

  describe "consul_notification" do
    let(:contact) { Contact.new(name: "Name", email: "email@example.com", message: "message") }
    let(:mail)    { ContactMailer.consul_notification(contact) }

    it "send mail to default recipient email" do
      expect(mail.to).to eq(["info@rockandror.com"])
    end

    it "send mail to default recipient when ENV recipients are not defined" do
      expect(mail.to).to eq(["info@rockandror.com"])
    end

    it "send mail to default recipient and ENV recipients email" do
      ENV["consul_recipients"] = "<example@recipient.net>"
      expect(mail.to).to eq(["info@rockandror.com", "example@recipient.net"])
      ENV["consul_recipients"] = nil
    end

    it "send mail from contact email" do
      expect(mail.from).to eq(["noreply@rockandror.com"])
    end

    it "send mail with subject" do
      expect(mail.subject).to eq("#{contact.name} ha enviado una solicitud desde la web")
    end

    it "send mail with contact message" do
      expect(mail.body).to have_content("#{contact.name}")
      expect(mail.body).to have_content("#{contact.email}")
      expect(mail.body).to have_content("#{contact.message}")
    end
  end
end
