class BudgetController < ApplicationController
  def new
    @contact = Contact.new
  end
end
