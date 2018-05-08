module BudgetHelper

  def check_step(budget, id, module_id)
    span = "<span id=#{id}>"
    span += "√" if budget.send(module_id) == "true" || budget.send(module_id) == "1"
    span += "</span>"
    return span.html_safe
  end

  def calculate_price(budget)
    price = 0
    price += 1000 if budget.module_1 == "true" || budget.module_1 == "1"
    price += 1000 if budget.module_2 == "true" || budget.module_2 == "1"
    price += 500  if budget.module_3 == "true" || budget.module_3 == "1"
    price += 2000 if budget.module_4 == "true" || budget.module_4 == "1"
    price += 3200 if budget.module_5 == "true" || budget.module_5 == "1"
    price += 7200 if budget.module_6 == "true" || budget.module_6 == "1"
    return price.to_s + ' €'
  end

end
