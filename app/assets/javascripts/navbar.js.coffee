App.Navbar =

  initialize: ->
    console.log 'navbar'

    $('#menu-hamburger').click (e) ->
      $('.animation-hamburguer').toggleClass('open')
