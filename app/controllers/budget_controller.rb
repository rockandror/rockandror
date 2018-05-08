class BudgetController < ApplicationController

  def new
    @budget = params[:budget].present? ? Budget.new(budget_params) : Budget.new()
  end

  def create
    @budget = Budget.new(budget_params)
    if @budget.valid?
      BudgetMailer.notification(@budget).deliver_now
      redirect_to consul_budget_path, notice: "Se ha enviado su presupuesto al equipo de RockAndRor. En menos de 24h nos pondremos en contacto con usted."
    else
      render :new
    end
  end

  private

  def budget_params
    params.require(:budget).permit([:name, :email, :message, :ammount, :module_1, :module_2, :module_3, :module_4, :module_5, :module_6])
  end

end
