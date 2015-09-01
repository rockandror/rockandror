require "rails_helper"

describe ContactMailer do

  describe "notification" do

    let(:contact) { Contact.new(name: "Name", email: "email@example.com", message: "message") }
    let(:mail)    { ContactMailer.notification(contact) }

    it "send mail to contact email" do
      expect(mail.to).to eq(["info@rockandror.com"])
    end

    it "send mail from contact email" do
      expect(mail.from).to eq(["email@example.com"])
    end

    it "send mail with subject" do
      expect(mail.subject).to eq("#{contact.name} ha enviado una solicitud desde la web")
    end        
       
    it "send mail with contact message" do
      expect(mail.body).to have_content("#{contact.message}")
    end                
  end
end
