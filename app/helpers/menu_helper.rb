module MenuHelper
  def active?(controller_name, action_name, parameters = nil)
    if controller_name.present? && action_name.present? && parameters.present?
      "active" if controller?(controller_name) && action?(action_name) && parameters?(parameters)
    elsif controller_name.present? && parameters.present?
      "active" if controller?(controller_name) && parameters?(parameters)
    elsif controller_name.present? && action_name.present?
      "active" if controller?(controller_name) && action?(action_name)
    else
      "active" if controller?(controller_name)
    end
  end

  private

    def controller?(controller)
      if controller.kind_of?(Array)
        find = false
        controller.each do |c|
          find = true if c == (params[:controller])
        end
        return find
      else
        controller.include?(params[:controller])
      end
    end

    def action?(action)
      action.include?(params[:action])
    end

    def parameters?(parameters)
      find = 0
      parameters.each do |p|
        p.each do |key, value|
          find += 1  if params[key] == value
        end
      end
      find == parameters.size
    end
end
