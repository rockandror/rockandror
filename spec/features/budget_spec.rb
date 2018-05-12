require 'rails_helper'

feature 'budget request' do

  scenario 'should be send', js: true do
    visit consul_budget_path
    check_and_next_step

    fill_in 'budget_name', with: "Nombre"
    fill_in 'budget_email', with: "email@example.es"
    fill_in 'budget_message', with: "Solicitud de contacto"
    click_on 'Enviar solicitud'

    expect(page).to have_content "¡Acción realizada con éxito!"
    expect(page).to have_content "Se ha enviado su presupuesto al equipo de RockAndRor. En menos de 24h nos pondremos en contacto con usted."
  end

  scenario 'should be not send', js: true do
    visit consul_budget_path
    check_and_next_step

    fill_in 'budget_name', with: ""
    fill_in 'budget_email', with: "email@example.es"
    fill_in 'budget_message', with: "Solicitud de contacto"
    click_on 'Enviar solicitud'

    expect(page).to have_content "no puede estar en blanco"
  end

end

def check_and_next_step
  find("a[href='#next']").click
  find("a[href='#next']").click
  find("a[href='#next']").click
  find("a[href='#next']").click
  find("a[href='#next']").click
  find("a[href='#next']").click
  find("a[href='#next']").click
end
