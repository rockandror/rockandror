require 'capybara/rspec'
require 'capybara-screenshot/rspec'
require 'capybara/webkit'

Capybara.javascript_driver = :webkit
Capybara::Screenshot.webkit_options = { width: 1920, height: 1080 }
Capybara::Screenshot.autosave_on_failure = true

RSpec.configure do |config|
  
  def with_std_out_logger
    default_logger = ActiveRecord::Base.logger
    ActiveRecord::Base.logger = Logger.new(STDOUT)
    yield
  ensure
    ActiveRecord::Base.logger = default_logger
  end

  config.around(:each, db: true) do |example|
    with_std_out_logger { example.run }
  end
end
