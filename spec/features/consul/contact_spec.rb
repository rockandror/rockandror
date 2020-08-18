require 'rails_helper'

feature 'Contact', :js do
  before { ActionMailer::Base.deliveries = [] }

  scenario 'is send when all fields are valid' do
    visit consul_development_services_path

    fill_in 'contact_name', with: "Nombre"
    fill_in 'contact_email', with: "email@example.es"
    fill_in 'contact_message', with: "Solicitud de contacto"
    click_on 'Enviar mensaje'

    expect(page).to have_content "Gracias por contactar con nosotros. Te responderemos lo antes posible."
    expect(ActionMailer::Base.deliveries.size).to eq(1)
  end

  scenario 'is not send when form has errors' do
    visit consul_development_services_path

    fill_in 'contact_name', with: ""
    fill_in 'contact_email', with: "email@example.es"
    fill_in 'contact_message', with: "Solicitud de contacto"
    click_on 'Enviar mensaje'

    expect(page).to have_content "no puede estar en blanco"
    expect(ActionMailer::Base.deliveries.size).to eq(0)
  end

  scenario 'is not sent when honeypot field is filled' do
    visit consul_development_services_path

    fill_in 'contact_subject', with: "Trap for bots"
    fill_in 'contact_name', with: "My Name"
    fill_in 'contact_email', with: "email@example.es"
    fill_in 'contact_message', with: "Solicitud de contacto"
    click_on 'Enviar mensaje'

    expect(page).to have_content "Gracias por contactar con nosotros. Te responderemos lo antes posible."
    expect(ActionMailer::Base.deliveries.size).to eq(0)
  end

  describe "timestamp spam detection" do
    before do
      InvisibleCaptcha.timestamp_enabled = true
    end

    after do
      InvisibleCaptcha.timestamp_enabled = false
    end

    scenario 'is done when form is submitted too fast', :js do
      visit consul_development_services_path

      click_on 'Enviar mensaje'

      expect(page).to have_content "¡Lo siento, eso fue demasiado rápido! Por favor, vuelva a intentarlo."
      expect(ActionMailer::Base.deliveries.size).to eq(0)
    end
  end
end
