App.Home =

  initialize: ->
    console.log 'home'
    App.Scrollto.initialize()

    if $('.home').length > 0
      if window.matchMedia('(min-width: 768px)').matches
        if $('.home').length > 0
          windowHeight = $(window).innerHeight()
          $('.home section').css 'height', windowHeight
      else
        $('.home section.intro').css 'height', $(window).innerHeight()

    $('.next-section').click (e) ->
      $(e.target).fadeOut()

    App.Animate.initialize();
