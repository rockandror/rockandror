module PagesHelper

  def contact_now
    if params[:action] == "team"
      'Te ha gustado nuestro equipo y nuestra filosofia?'
    elsif params[:action] == "agile_development"
      'Nuestro metodo se alinea a tu negocio? '
    elsif params[:action] == "best_tools"
      'Crees que estamos a la altura tecnologica para tu proyecto?'
    elsif params[:action] == "open_source"
      'Estas listo para lanzar tu proyecto con el Open Source?'
    end

  end

end
