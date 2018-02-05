App.Navbar =

  initialize: ->
    console.log 'navbar'

    $('#menu-hamburger').click (e) ->
  	   $(this).toggleClass('open')
