require 'rails_helper'

feature 'Main page' do
  scenario 'should render main sections' do
    visit root_path

    expect(page).to have_css('section.intro', count: 1)
    expect(page).to have_css('section.tecnology', count: 1)
    expect(page).to have_css('section.agile_developer', count: 1)
    expect(page).to have_css('section.open_source', count: 1)
    expect(page).to have_css('section.team', count: 1)
    expect(page).to have_css('section.works', count: 1)
    expect(page).to have_css('section.testimonials', count: 1)
    expect(page).to have_css('section.contact', count: 1)
  end

  scenario 'should have navbar with section links' do
    visit root_path

    within('.top-bar-section ul.right') do
      expect(page).to have_link('Contratarnos')
    end

    within('.top-bar-section ul.show-for-medium-up') do
      expect(page).to have_link('Inicio')
      expect(page).to have_link('Últimos trabajos')
      expect(page).to have_link('Webdings')
      expect(page).to have_link('Eatbooking')
      expect(page).to have_link('Oasis Catamaran')
    end
  end
end
