require "rails_helper"

feature "Cookies consent" do
  scenario "is shown" do
    visit root_path

    expect(page).to have_css(".cookies-eu")
    expect(page).to have_content("Las cookies nos ayudan a ofrecer nuestros servicios.")
  end

  scenario "is not shown when cokies already accepted", :js do
    visit root_path

    within(".cookies-eu") do
      click_on "OK"
    end

    expect(page).not_to have_css(".cookies-eu")
    expect(page).not_to have_content("Las cookies nos ayudan a ofrecer nuestros servicios.")

    visit root_path

    expect(page).not_to have_css(".cookies-eu")
    expect(page).not_to have_content("Las cookies nos ayudan a ofrecer nuestros servicios.")
  end

  scenario "after click on OK button cookies consent is hidden", :js do
    visit root_path

    within(".cookies-eu") do
      click_on "OK"
    end

    expect(page).not_to have_css(".cookies-eu")
    expect(page).not_to have_content("Las cookies nos ayudan a ofrecer nuestros servicios.")
  end
end
