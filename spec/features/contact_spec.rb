require 'rails_helper'

feature 'Contact' do
  scenario 'request should be send when all fields are valid' do
    visit new_contact_path

    fill_in 'contact_name', with: "Nombre"
    fill_in 'contact_email', with: "email@example.es"
    fill_in 'contact_message', with: "Solicitud de contacto"
    click_on 'Enviar mensaje'

    expect(page).to have_content "Gracias por contactar con nosotros."
    expect(page).to have_content "Obtendrá una respuesta en menos de 24 horas."
  end

  scenario 'should be not send when form has validation errors' do
    visit new_contact_path

    fill_in 'contact_name', with: ""
    fill_in 'contact_email', with: "email@example.es"
    fill_in 'contact_message', with: "Solicitud de contacto"
    click_on 'Enviar mensaje'

    expect(page).to have_content "no puede estar en blanco"
  end
end
