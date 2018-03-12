class ServiceController < ApplicationController

  def new
    @service = Service.new
  end

  def create
    @service = Service.new(service_params)
    if @service.valid?
      ServiceMailer.notification(@service).deliver_now
      redirect_to new_service_path
    else
      render "service/new"
    end
  end

  private

  def service_params
    params.require(:service).permit([:name, :email, :message, :ammount, :module_1, :module_2, :module_3, :module_4, :module_5, :module_6])
  end

end
