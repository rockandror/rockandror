require 'rails_helper'

feature 'contact request' do

  scenario 'should be send' do
    visit new_contact_path
    fill_in 'contact_name', with: "Nombre"
    fill_in 'contact_email', with: "email@example.es"
    fill_in 'contact_message', with: "Solicitud de contacto"  
    click_on 'Contacta ahora'
    expect(page).to have_content "Gracias por contactarnos"
    expect(page).to have_content "Gracias por ponerse en contacto con Rockandror, obtendrá una respuesta en 48 horas"
  end

  scenario 'should be not send' do
    visit new_contact_path
    fill_in 'contact_name', with: ""
    fill_in 'contact_email', with: "email@example.es"
    fill_in 'contact_message', with: "Solicitud de contacto"  
    click_on 'Contacta ahora'
    expect(page).to have_content "no puede estar en blanco"    
  end  

end