module ApplicationHelper
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
