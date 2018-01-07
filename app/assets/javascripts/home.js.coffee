App.Home =

  initialize: ->
    console.log 'home'
    App.Scrollto.initialize()

    navHeight = $('nav').height()
    heightTopBar = $('.top-bar').height()
    windowHeight = $(window).height() - heightTopBar
    windowWidth = $(window).width()

    if $('.home').length > 0
      if window.matchMedia('(min-width: 768px)').matches
        if $('.home').length > 0
          windowHeight = $(window).innerHeight()
          $('.home section').css 'height', windowHeight
      else
        $('.home section.intro').css 'height', $(window).innerHeight()

    App.Animate.initialize();
