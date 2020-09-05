require "rails_helper"

feature "Consul" do
  scenario "redirect /consul/budget old route to consul show page" do
    visit "/consul/budget"

    expect(page).to have_current_path(consul_path)
    expect(page).to have_content "Equipo certificado"
  end
end
