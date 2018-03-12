class Service
  include ActiveModel::Validations
  include ActiveModel::Conversion
  extend ActiveModel::Naming

  attr_accessor :name, :email, :message, :ammount, :module_1, :module_2, :module_3, :module_4, :module_5, :module_6

  validates_presence_of :name, :email, :message
  validates :email, :email => true

  def initialize(attributes = {})
    attributes.each do |name, value|
      send("#{name}=", value)
    end
  end

  def ammount
    @ammount ||= 0
  end

  def persisted?
    false
  end

end
