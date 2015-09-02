require 'rails_helper'

feature 'Main page' do
  scenario 'should render main sections' do
    visit root_path
    expect(page).to have_css('div.intro', count: 1)
    expect(page).to have_css('div.about', count: 1)
    expect(page).to have_css('div.tecnology', count: 1)
    expect(page).to have_css('div.team', count: 1)
    expect(page).to have_css('div.contact', count: 1)
  end

  scenario 'should have navbar with section links' do
    visit root_path

    within('#navbar ul') do
      expect(page).to have_link('Inicio')
      expect(page).to have_link('Rock&Ror')
      expect(page).to have_link('Tecnologías')
      expect(page).to have_link('Equipo')
      expect(page).to have_link('Contacto')
    end
  end
end