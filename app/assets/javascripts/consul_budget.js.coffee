App.ConsulBudget =

  initialize: ->
    if $('.budget-consul').length > 0
      console.log 'ConsulBudget'
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

      App.ConsulBudget.updatePrice()

  isMobile: ->
    try
      document.createEvent 'TouchEvent'
      return true
    catch e

  updatePrice: ->
    console.log("update price")
    $('#budget_ammount').val parseInt($('#budget_ammount').val()) + ' €'

    $('#budget_module_1').click ->
      if $('#budget_module_1')[0].checked == true
        $('#budget_ammount').val parseInt($('#budget_ammount').val()) + 1000 + ' €'
        $('#checked-1').html '√'
        $('#title_mod_1').html '- Preparación de servidores'
      else
        $('#budget_ammount').val parseInt($('#budget_ammount').val()) - 1000 + ' €'
        $('#checked-1').html ''
        $('#title_mod_1').html ''

    $('#budget_module_2').click ->
      if $('#budget_module_2')[0].checked == true
        $('#budget_ammount').val parseInt($('#budget_ammount').val()) + 1000 + ' €'
        $('#checked-2').html '√'
        $('#title_mod_2').html '- Configuración e Instalación'
      else
        $('#budget_ammount').val parseInt($('#budget_ammount').val()) - 1000 + ' €'
        $('#checked-2').html ''
        $('#title_mod_2').html ''

    $('#budget_module_3').click ->
      if $('#budget_module_3')[0].checked == true
        $('#budget_ammount').val parseInt($('#budget_ammount').val()) + 500 + ' €'
        $('#checked-3').html '√'
        $('#title_mod_3').html '- Adaptación visual'
      else
        $('#budget_ammount').val parseInt($('#budget_ammount').val()) - 500 + ' €'
        $('#checked-3').html ''
        $('#title_mod_3').html ''

    $('#budget_module_4').click ->
      if $('#budget_module_4')[0].checked == true
        $('#budget_ammount').val parseInt($('#budget_ammount').val()) + 2000 + ' €'
        $('#checked-4').html '√'
        $('#title_mod_4').html '- Integración Censo'
      else
        $('#budget_ammount').val parseInt($('#budget_ammount').val()) - 2000 + ' €'
        $('#checked-4').html ''
        $('#title_mod_4').html ''

    $('#budget_module_5').click ->
      if $('#budget_module_5')[0].checked == true
        $('#budget_ammount').val parseInt($('#budget_ammount').val()) + 3200 + ' €'
        $('#checked-5').html '√'
        $('#title_mod_5').html '- Personalización de procesos'
      else
        $('#budget_ammount').val parseInt($('#budget_ammount').val()) - 3200 + ' €'
        $('#checked-5').html ''
        $('#title_mod_5').html ''


    $('#budget_module_6').click ->
      if $('#budget_module_6')[0].checked == true
        $('#budget_ammount').val parseInt($('#budget_ammount').val()) + 7200 + ' €'
        $('#checked-6').html '√'
        $('#title_mod_6').html '- Mantenimiento y monitorización'
      else
        $('#budget_ammount').val parseInt($('#budget_ammount').val()) - 7200 + ' €'
        $('#checked-6').html ''
        $('#title_mod_6').html ''
