require 'rails_helper'

feature 'Contact', :js do
  scenario 'is send when all fields are valid' do
    visit consul_development_services_path

    fill_in 'contact_name', with: "Nombre"
    fill_in 'contact_email', with: "email@example.es"
    fill_in 'contact_message', with: "Solicitud de contacto"
    click_on 'Enviar mensaje'

    expect(page).to have_content "Gracias por contactar con nosotros. Te responderemos lo antes posible."
  end

  scenario 'show errors when form is invalid' do
    visit consul_development_services_path

    fill_in 'contact_name', with: ""
    fill_in 'contact_email', with: "email@example.es"
    fill_in 'contact_message', with: "Solicitud de contacto"
    click_on 'Enviar mensaje'

    expect(page).to have_content "no puede estar en blanco"
  end
end
