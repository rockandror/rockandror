App.Navbar =

  initialize: ->
    console.log 'navbar'
    navHeight = $('nav').height()
    heightTopBar = $('.top-bar').height()
    windowHeight = $(window).height() - heightTopBar

    $('.navbar-collapse').on 'shown.bs.collapse', ->
      $('.navbar #navbar').height(windowHeight)
      $('.glyphicon-menu-hamburger').addClass('hidden')
      $('.glyphicon-remove').removeClass('hidden')

    $('.navbar-collapse').on 'hidden.bs.collapse', ->
      $('.glyphicon-menu-hamburger').removeClass('hidden')
      $('.glyphicon-remove').addClass('hidden')
