class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :set_locale

  private

  def set_locale
    I18n.locale = current_locale

    session[:locale] = I18n.locale
  end

  def current_locale
    if I18n.available_locales.include?(params[:locale]&.to_sym)
      params[:locale]
    elsif I18n.available_locales.include?(session[:locale]&.to_sym)
      session[:locale]
    else
      I18n.default_locale
    end
  end
end
