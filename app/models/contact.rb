require "active_model"

class Contact
  include ActiveModel::Validations
  include ActiveModel::Conversion
  extend ActiveModel::Naming

  attr_accessor :name, :email, :message

  validates_presence_of :name, :email, :message
  validates :email, format: { with: /\A(.+)@(.+)\z/, message: "Email invalid" },
                    length: { minimum: 4, maximum: 254 }

  def initialize(attributes = {})
    attributes.each do |name, value|
      send("#{name}=", value)
    end
  end

  def persisted?
    false
  end

end
