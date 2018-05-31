require 'rails_helper'

feature 'contact request' do

  scenario 'should be send' do
    visit new_contact_path
    fill_in 'contact_name', with: "Nombre"
    fill_in 'contact_email', with: "email@example.es"
    select "5.000", :from => "contact_budget"
    fill_in 'contact_message', with: "Solicitud de contacto"
    click_on 'Enviar mensaje'
    expect(page).to have_content "Gracias por contactar con nosotros."
    expect(page).to have_content "Obtendrá una respuesta en menos de 24 horas"
  end

  scenario 'should be not send' do
    visit new_contact_path
    fill_in 'contact_name', with: ""
    fill_in 'contact_email', with: "email@example.es"
    fill_in 'contact_message', with: "Solicitud de contacto"
    click_on 'Enviar mensaje'
    expect(page).to have_content "no puede estar en blanco"
  end

end
