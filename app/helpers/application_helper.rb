module ApplicationHelper
  def active?(action, parameter)
    klass = ""
    if parameter.present?
      if action == parameter
        klass = "active disable"
      elsif action == "portfolio" && (parameter == "eatbooking" || parameter == "webdings" || parameter == "oasiscatamaran")
         klass = "active"
      else
        klass = ""
      end
    end
    klass
  end

  def tel_to(text)
    groups = text.to_s.scan(/(?:^\+)?\d+/)
    link_to text, "tel:#{groups.join '-'}"
  end
end
