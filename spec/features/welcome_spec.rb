require 'rails_helper'

feature 'Main page' do
  scenario 'should render main sections' do
    visit root_path

    expect(page).to have_css('section.rockandror', count: 1)
    expect(page).to have_css('section.webdings', count: 1)
    expect(page).to have_css('section.oasis', count: 1)
    expect(page).to have_css('section.participation', count: 1)
    expect(page).to have_css('section.howweworks', count: 1)
    expect(page).to have_css('section.contact-now', count: 1)
  end

  scenario 'should have navbar with section links' do
    visit root_path

    within('.top-bar-section') do
      expect(page).to have_link('Inicio')
      expect(page).to have_link('Servicios Consul')
      expect(page).to have_link('Trabajos')
      expect(page).to have_link('Webdings')
      expect(page).to have_link('Eatbooking')
      expect(page).to have_link('Oasis Catamaran')
      expect(page).to have_link('Contacto')
    end
  end
end
