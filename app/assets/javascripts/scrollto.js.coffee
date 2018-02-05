App.Scrollto =

  initialize: ->

    $('a[href*=#scroll_to_]:not([href=#])').click ->
      $(this).parent().addClass 'active'
      if location.pathname.replace(/^\//, '') == @pathname.replace(/^\//, '') and location.hostname == @hostname
        target = $(@hash)
        target = if target.length then target else $('[name=' + @hash.slice(1) + ']')
        if target.length
          if $(window).width() <= 768
            $('html,body').animate { scrollTop: target.offset().top-60 }, 700
          else
            $('html,body').animate { scrollTop: target.offset().top }, 700
