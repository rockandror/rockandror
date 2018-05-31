require 'rails_helper'

feature 'Main page' do
  scenario 'should render main sections' do
    visit root_path

    expect(page).to have_css('section.intro', count: 1)
    expect(page).to have_css('section.best_tools', count: 1)
    expect(page).to have_css('section.agile_developer', count: 1)
    expect(page).to have_css('section.open_source', count: 1)
    expect(page).to have_css('section.team', count: 1)
    expect(page).to have_css('section.works', count: 1)
    # expect(page).to have_css('section.testimonials', count: 1)
    expect(page).to have_css('section.contact', count: 1)
  end

  scenario 'should have navbar with section links' do
    visit root_path

    within '#navbar' do
      expect(page).to have_link('Como trabajamos')
      expect(page).to have_link('Trabajos')
      expect(page).to have_link('Equipo')
      expect(page).to have_link('Servicios Consul')
      expect(page).to have_link('Contacta')
    end
  end
end
