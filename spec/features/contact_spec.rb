require 'rails_helper'

feature "contact request" do

  scenario 'should be send' do
    visit root_path
    fill_in 'Nombre', with: "Nombre"
    fill_in 'Email', with: "email@example.es"
    fill_in 'Mensaje', with: "Solicitud de contacto"  
    
    click_on 'Enviar'

    expect(page).to have_content "Gracias por contactar con nosotros. Le atenderemos en cuanto sea posible."    
  end

  scenario 'should be not send' do
    visit root_path
    fill_in 'Nombre', with: ""
    fill_in 'Email', with: "email@example.es"
    fill_in 'Mensaje', with: "Solicitud de contacto"  
    
    click_on 'Enviar'

    expect(page).to have_content "no puede estar en blanco"    
  end  

end