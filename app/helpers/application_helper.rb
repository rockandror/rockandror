module ApplicationHelper
  def active?(action, parameter)
    klass = ""
    if parameter.present?
      if action == parameter
        klass = "active" 
      elsif action == "portfolio" && (parameter == "eatbooking" || parameter == "webdings" || parameter == "oasiscatamaran")
         klass = "active"
      else
        klass = ""
      end
    end
    klass
  end
end
