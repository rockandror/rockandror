module PagesHelper

  def title(text)
    content_for :title, text
  end

  def meta_tag(tag, text)
    content_for :"meta_#{tag}", text
  end

  def yield_meta_tag(tag, default_text='')
    content_for?(:"meta_#{tag}") ? content_for(:"meta_#{tag}") : default_text
  end

  def testimonials(avatar, name, description)
    content_tag :div, class:'row customer' do
      content_tag(:div, nil, class:'container') do
        concat content_tag(:h2, (t'helper.testimonials.h2_customer_html'), class:'text-center')
        concat image_tag(avatar, class: 'img-responsive img-circle')
        concat content_tag(:p, name, class:'text-center')
        concat content_tag(:p, description, class:'col-md-8 col-md-offset-2 text-center')
      end
    end
  end

  def contact_now
    if params[:action] == "team"
      t 'helper.contact_now.team'
    elsif params[:action] == "agile-development"
      t 'helper.contact_now.agile_development'
    elsif params[:action] == "best-tools"
      t 'helper.contact_now.best_tools'
    elsif params[:action] == "open-source"
      t 'helper.contact_now.open_source'
    elsif params[:action] == "startup"
      t 'helper.contact_now.startup'
    elsif params[:action] == "desarrollo-web-palma-de-mallorca"
      t 'helper.contact_now.desarrollo_web_palma_de_mallorca'
    elsif params[:action] == "boatjump" || params[:action] == "webdings" || params[:action] == "eatbooking" || params[:action] == "oasiscatamaran" || params[:action] == "taskscheduler"
      t 'helper.contact_now.works_customer'
    end
  end

end
