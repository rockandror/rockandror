App.ConsulBudget =

  initialize: ->
    App.ConsulBudget.initBudgetSteps()
    App.ConsulBudget.addCheckedStyles()
    App.ConsulBudget.removeCheckedStyles()
    App.ConsulBudget.updatePrice()
    App.ConsulBudget.updateSteps()
    App.ConsulBudget.initCheckedModules()

  isMobile: ->
    try
      document.createEvent 'TouchEvent'
      return true
    catch e

  initBudgetSteps: ->
    if $('.budget-consul').length > 0
      wizard = $('#new_budget #wizard')
      if App.ConsulBudget.isMobile()
        orientation = 'horizontal'
      else
        orientation = 'vertical'

      wizard.steps
        headerTag: 'h3'
        bodyTag: 'section'
        transitionEffect: 'none'
        titleTemplate: '#title#'
        stepsOrientation: orientation
        onFinished: (event, currentIndex) ->
          wizard.closest('form').submit()
          return
        labels:
          next: 'Siguiente'
          previous: 'Anterior'
          finish: 'Enviar solicitud'
      if $('#new_budget').data('errored') == true or $('#new_budget').data('received-params') == true
        wizard.steps 'next'
        wizard.steps 'next'
        wizard.steps 'next'
        wizard.steps 'next'
        wizard.steps 'next'
        wizard.steps 'next'
        wizard.steps 'next'
        return false

  updateSteps: ->
    $('#budget_ammount').val parseInt($('#budget_ammount').val()) + ' €'
    $('#module-total-content-price').html parseInt($('#budget_ammount').val()) + ' €'

    $('#budget_module_1').click ->
      if $('#budget_module_1')[0].checked == true
        App.ConsulBudget.updatePrice("+", 1000)
        App.ConsulBudget.addCheckedStyles("#wizard-t-0", "#checked-1")
        $('#title_mod_1 strong').html '- Preparación de servidores'
      else
        App.ConsulBudget.updatePrice("-", 1000)
        App.ConsulBudget.removeCheckedStyles("#wizard-t-0", "#checked-1")
        $('#title_mod_1 strong').html ''

    $('#budget_module_2').click ->
      if $('#budget_module_2')[0].checked == true
        App.ConsulBudget.updatePrice("+", 1000)
        App.ConsulBudget.addCheckedStyles("#wizard-t-1", "#checked-2")
        $('#title_mod_2 strong').html '- Configuración e Instalación'
      else
        App.ConsulBudget.updatePrice("-", 1000)
        App.ConsulBudget.removeCheckedStyles("#wizard-t-1", "#checked-2")
        $('#title_mod_2 strong').html ''

    $('#budget_module_3').click ->
      if $('#budget_module_3')[0].checked == true
        App.ConsulBudget.updatePrice("+", 500)
        App.ConsulBudget.addCheckedStyles("#wizard-t-2", "#checked-3")
        $('#title_mod_3 strong').html '- Adaptación visual'
      else
        App.ConsulBudget.updatePrice("-", 500)
        App.ConsulBudget.removeCheckedStyles("#wizard-t-2", "#checked-3")
        $('#title_mod_3 strong').html ''

    $('#budget_module_4').click ->
      if $('#budget_module_4')[0].checked == true
        App.ConsulBudget.updatePrice("+", 2000)
        App.ConsulBudget.addCheckedStyles("#wizard-t-3", "#checked-4")
        $('#title_mod_4 strong').html '- Integración Censo'
      else
        App.ConsulBudget.updatePrice("-", 2000)
        App.ConsulBudget.removeCheckedStyles("#wizard-t-3", "#checked-4")
        $('#title_mod_4 strong').html ''

    $('#budget_module_5').click ->
      if $('#budget_module_5')[0].checked == true
        App.ConsulBudget.updatePrice("+", 3200)
        App.ConsulBudget.addCheckedStyles("#wizard-t-4", "#checked-5")
        $('#title_mod_5 strong').html '- Personalización de procesos'
      else
        App.ConsulBudget.updatePrice("-", 3200)
        App.ConsulBudget.removeCheckedStyles("#wizard-t-4", "#checked-5")
        $('#title_mod_5 strong').html ''

    $('#budget_module_6').click ->
      if $('#budget_module_6')[0].checked == true
        App.ConsulBudget.updatePrice("+", 7200)
        App.ConsulBudget.addCheckedStyles("#wizard-t-5", "#checked-6")
        $('#title_mod_6 strong').html '- Mantenimiento y monitorización'
      else
        App.ConsulBudget.updatePrice("-", 7200)
        App.ConsulBudget.removeCheckedStyles("#wizard-t-5", "#checked-6")
        $('#title_mod_6 strong').html ''

  initCheckedModules: ->
    if $('.budget-consul').length > 0

      if $('#budget_module_1')[0].checked == true
        App.ConsulBudget.addCheckedStyles("#wizard-t-0", "#checked-1")

      if $('#budget_module_2')[0].checked == true
        App.ConsulBudget.addCheckedStyles("#wizard-t-1", "#checked-2")

      if $('#budget_module_3')[0].checked == true
        App.ConsulBudget.addCheckedStyles("#wizard-t-2", "#checked-3")

      if $('#budget_module_4')[0].checked == true
        App.ConsulBudget.addCheckedStyles("#wizard-t-3", "#checked-4")

      if $('#budget_module_5')[0].checked == true
        App.ConsulBudget.addCheckedStyles("#wizard-t-4", "#checked-5")

      if $('#budget_module_6')[0].checked == true
        App.ConsulBudget.addCheckedStyles("#wizard-t-5", "#checked-6")

  addCheckedStyles: (wizard_id, check_id) ->
    $(wizard_id).addClass('active');
    $(check_id).show()
    $(check_id).html '<span>√</span>'

  removeCheckedStyles: (wizard_id, check_id) ->
    $(wizard_id).removeClass('active');
    $(check_id).hide()
    $(check_id).html ''

  updatePrice: (sign, price) ->
    if price
      if sign == "+"
        $('#budget_ammount').val parseInt($('#budget_ammount').val()) + parseInt(price) + ' €'
      else
        $('#budget_ammount').val parseInt($('#budget_ammount').val()) - parseInt(price) + ' €'

      $('#module-total-content-price').html parseInt($('#budget_ammount').val()) + ' €'
