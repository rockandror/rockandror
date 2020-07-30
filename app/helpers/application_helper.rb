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

  def meta_title
    content_for?(:meta_title) ? content_for(:meta_title) : t("meta.title")
  end

  def meta_description
    content_for?(:meta_description) ? content_for(:meta_description) : t("meta.description")
  end

  def meta_keywords
    content_for?(:meta_keywords) ? content_for(:meta_keywords) : t("meta.keywords")
  end
end
