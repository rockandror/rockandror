require 'rails_helper'

feature 'budget request' do

  scenario 'should be send', js: true do
    visit consul_budget_path

    fill_in 'contact_name', with: "Nombre"
    fill_in 'contact_email', with: "email@example.es"
    fill_in 'contact_message', with: "Solicitud de contacto"
    click_on 'Enviar mensaje'

    expect(page).to have_content "Gracias por contactar con nosotros. Le responderemos lo antes posible. "
  end

  scenario 'should be not send', js: true do
    visit consul_budget_path

    fill_in 'contact_name', with: ""
    fill_in 'contact_email', with: "email@example.es"
    fill_in 'contact_message', with: "Solicitud de contacto"
    click_on 'Enviar mensaje'

    expect(page).to have_content "no puede estar en blanco"
  end
end
