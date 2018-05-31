App.ConsulBudget =

  initialize: ->
    App.ConsulBudget.initBudgetSteps()
    App.ConsulBudget.updatePrice()
    App.ConsulBudget.initCheckedModules()

  isMobile: ->
    try
      document.createEvent 'TouchEvent'
      return true
    catch e

  initBudgetSteps: ->
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

  updatePrice: ->
    console.log("update price")
    $('#budget_ammount').val parseInt($('#budget_ammount').val())
    $('#module-total-content-price').html parseInt($('#budget_ammount').val())

    $('#budget_module_1').click ->
      if $('#budget_module_1')[0].checked == true
        $('#budget_ammount').val parseInt($('#budget_ammount').val()) + 1000 + ' €'
        $('#module-total-content-price').html parseInt($('#budget_ammount').val())
        $('#wizard-t-0').addClass('active');
        $('#checked-1').show()
        $('#checked-1').html '<span>√</span>'
        $('#title_mod_1 strong').html '- Preparación de servidores'
      else
        $('#budget_ammount').val parseInt($('#budget_ammount').val()) - 1000 + ' €'
        $('#module-total-content-price').html parseInt($('#budget_ammount').val())
        $('#wizard-t-0').removeClass('active');
        $('#checked-1').hide()
        $('#checked-1').html ''
        $('#title_mod_1 strong').html ''

    $('#budget_module_2').click ->
      if $('#budget_module_2')[0].checked == true
        $('#budget_ammount').val parseInt($('#budget_ammount').val()) + 1000 + ' €'
        $('#module-total-content-price').html parseInt($('#budget_ammount').val())
        $('#wizard-t-1').addClass('active');
        $('#checked-2').show()
        $('#checked-2').html '<span>√</span>'
        $('#title_mod_2 strong').html '- Configuración e Instalación'
      else
        $('#budget_ammount').val parseInt($('#budget_ammount').val()) - 1000 + ' €'
        $('#module-total-content-price').html parseInt($('#budget_ammount').val())
        $('#wizard-t-1').removeClass('active');
        $('#checked-2').html ''
        $('#checked-2').hide()
        $('#title_mod_2 strong').html ''

    $('#budget_module_3').click ->
      if $('#budget_module_3')[0].checked == true
        $('#budget_ammount').val parseInt($('#budget_ammount').val()) + 500 + ' €'
        $('#module-total-content-price').html parseInt($('#budget_ammount').val())
        $('#wizard-t-2').addClass('active');
        $('#checked-3').show()
        $('#checked-3').html '<span>√</span>'
        $('#title_mod_3 strong').html '- Adaptación visual'
      else
        $('#budget_ammount').val parseInt($('#budget_ammount').val()) - 500 + ' €'
        $('#module-total-content-price').html parseInt($('#budget_ammount').val())
        $('#wizard-t-2').removeClass('active');
        $('#checked-3').hide();
        $('#checked-3').html ''
        $('#title_mod_3 strong').html ''

    $('#budget_module_4').click ->
      if $('#budget_module_4')[0].checked == true
        $('#budget_ammount').val parseInt($('#budget_ammount').val()) + 2000 + ' €'
        $('#module-total-content-price').html parseInt($('#budget_ammount').val())
        $('#wizard-t-3').addClass('active');
        $('#checked-4').show();
        $('#checked-4').html '<span>√</span>'
        $('#title_mod_4 strong').html '- Integración Censo'
      else
        $('#budget_ammount').val parseInt($('#budget_ammount').val()) - 2000 + ' €'
        $('#module-total-content-price').html parseInt($('#budget_ammount').val())
        $('#wizard-t-3').removeClass('active');
        $('#checked-4').hide();
        $('#checked-4').html ''
        $('#title_mod_4 strong').html ''

    $('#budget_module_5').click ->
      if $('#budget_module_5')[0].checked == true
        $('#budget_ammount').val parseInt($('#budget_ammount').val()) + 3200 + ' €'
        $('#module-total-content-price').html parseInt($('#budget_ammount').val())
        $('#wizard-t-4').addClass('active');
        $('#checked-5').show();
        $('#checked-5').html '<span>√</span>'
        $('#title_mod_5 strong').html '- Personalización de procesos'
      else
        $('#budget_ammount').val parseInt($('#budget_ammount').val()) - 3200 + ' €'
        $('#module-total-content-price').html parseInt($('#budget_ammount').val())
        $('#wizard-t-4').removeClass('active');
        $('#checked-5').hide();
        $('#checked-5').html ''
        $('#title_mod_5 strong').html ''

    $('#budget_module_6').click ->
      if $('#budget_module_6')[0].checked == true
        $('#budget_ammount').val parseInt($('#budget_ammount').val()) + 7200 + ' €'
        $('#module-total-content-price').html parseInt($('#budget_ammount').val())
        $('#wizard-t-5').addClass('active');
        $('#checked-6').show();
        $('#checked-6').html '<span>√</span>'
        $('#title_mod_6 strong').html '- Mantenimiento y monitorización'
      else
        $('#budget_ammount').val parseInt($('#budget_ammount').val()) - 7200 + ' €'
        $('#module-total-content-price').html parseInt($('#budget_ammount').val())
        $('#wizard-t-5').removeClass('active');
        $('#checked-6').hide();
        $('#checked-6').html ''
        $('#title_mod_6 strong').html ''

  initCheckedModules: ->
    if $('.budget-consul').length > 0
    # console.log("update price")
    # $('#budget_ammount').val parseInt($('#budget_ammount').val())
    # $('#module-total-content-price').html parseInt($('#budget_ammount').val())

    # $('#budget_module_1').click ->
      if $('#budget_module_1')[0].checked == true
        # $('#budget_ammount').val parseInt($('#budget_ammount').val()) + 1000 + ' €'
        # $('#module-total-content-price').html parseInt($('#budget_ammount').val())
        $('#wizard-t-0').addClass('active');
        $('#checked-1').show()
        $('#checked-1').html '<span>√</span>'
        # $('#title_mod_1 strong').html '- Preparación de servidores'
      # else
      #   $('#budget_ammount').val parseInt($('#budget_ammount').val()) - 1000 + ' €'
      #   $('#module-total-content-price').html parseInt($('#budget_ammount').val())
      #   $('#wizard-t-0').removeClass('active');
      #   $('#checked-1').hide()
      #   $('#checked-1').html ''
      #   $('#title_mod_1 strong').html ''

      # $('#budget_module_2').click ->
      if $('#budget_module_2')[0].checked == true
        # $('#budget_ammount').val parseInt($('#budget_ammount').val()) + 1000 + ' €'
        # $('#module-total-content-price').html parseInt($('#budget_ammount').val())
        $('#wizard-t-1').addClass('active');
        $('#checked-2').show()
        $('#checked-2').html '<span>√</span>'
        # $('#title_mod_2 strong').html '- Configuración e Instalación'
      # else
      #   $('#budget_ammount').val parseInt($('#budget_ammount').val()) - 1000 + ' €'
      #   $('#module-total-content-price').html parseInt($('#budget_ammount').val())
      #   $('#wizard-t-1').removeClass('active');
      #   $('#checked-2').html ''
      #   $('#checked-2').hide()
      #   $('#title_mod_2 strong').html ''

      # $('#budget_module_3').click ->
      if $('#budget_module_3')[0].checked == true
        # $('#budget_ammount').val parseInt($('#budget_ammount').val()) + 500 + ' €'
        # $('#module-total-content-price').html parseInt($('#budget_ammount').val())
        $('#wizard-t-2').addClass('active');
        $('#checked-3').show()
        $('#checked-3').html '<span>√</span>'
        # $('#title_mod_3 strong').html '- Adaptación visual'
      # else
      #   $('#budget_ammount').val parseInt($('#budget_ammount').val()) - 500 + ' €'
      #   $('#module-total-content-price').html parseInt($('#budget_ammount').val())
      #   $('#wizard-t-2').removeClass('active');
      #   $('#checked-3').hide();
      #   $('#checked-3').html ''
      #   $('#title_mod_3 strong').html ''

      # $('#budget_module_4').click ->
      if $('#budget_module_4')[0].checked == true
        # $('#budget_ammount').val parseInt($('#budget_ammount').val()) + 2000 + ' €'
        # $('#module-total-content-price').html parseInt($('#budget_ammount').val())
        $('#wizard-t-3').addClass('active');
        $('#checked-4').show();
        $('#checked-4').html '<span>√</span>'
        # $('#title_mod_4 strong').html '- Integración Censo'
      # else
      #   $('#budget_ammount').val parseInt($('#budget_ammount').val()) - 2000 + ' €'
      #   $('#module-total-content-price').html parseInt($('#budget_ammount').val())
      #   $('#wizard-t-3').removeClass('active');
      #   $('#checked-4').hide();
      #   $('#checked-4').html ''
      #   $('#title_mod_4 strong').html ''

      # $('#budget_module_5').click ->
      if $('#budget_module_5')[0].checked == true
        # $('#budget_ammount').val parseInt($('#budget_ammount').val()) + 3200 + ' €'
        # $('#module-total-content-price').html parseInt($('#budget_ammount').val())
        $('#wizard-t-4').addClass('active');
        $('#checked-5').show();
        $('#checked-5').html '<span>√</span>'
        # $('#title_mod_5 strong').html '- Personalización de procesos'
      # else
      #   $('#budget_ammount').val parseInt($('#budget_ammount').val()) - 3200 + ' €'
      #   $('#module-total-content-price').html parseInt($('#budget_ammount').val())
      #   $('#wizard-t-4').removeClass('active');
      #   $('#checked-5').hide();
      #   $('#checked-5').html ''
      #   $('#title_mod_5 strong').html ''

      # $('#budget_module_6').click ->
      if $('#budget_module_6')[0].checked == true
        # $('#budget_ammount').val parseInt($('#budget_ammount').val()) + 7200 + ' €'
        # $('#module-total-content-price').html parseInt($('#budget_ammount').val())
        $('#wizard-t-5').addClass('active');
        $('#checked-6').show();
        $('#checked-6').html '<span>√</span>'
        # $('#title_mod_6 strong').html '- Mantenimiento y monitorización'
      # else
      #   $('#budget_ammount').val parseInt($('#budget_ammount').val()) - 7200 + ' €'
      #   $('#module-total-content-price').html parseInt($('#budget_ammount').val())
      #   $('#wizard-t-5').removeClass('active');
      #   $('#checked-6').hide();
      #   $('#checked-6').html ''
      #   $('#title_mod_6 strong').html ''
