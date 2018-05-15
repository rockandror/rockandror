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

  isMobile: ->
    try
      document.createEvent 'TouchEvent'
      return true
    catch e
