App.Animate =

  initialize: ->

    logoCircle = $('circle')
    logoRobot = $('#robot')
    topBar = $('.top-bar')
    backgroundIntro = $('.intro')
    backgroundIntroMan = $('.bg-man')
    h2 = $(".intro .container h2")
    h1 = $(".intro .container h1")
    lead = $(".intro lead")
    quote = $(".intro span")
    btnDiscover = $("#btn-discover")

    tl_logo = new TimelineMax
    tl_logo.fromTo(logoCircle, 1, {
      scale: 0.6
      transformOrigin: '50% 50%'
    },
      scale: 1
      autoAlpha: 1
      ease: Power4.easeOut
      delay: 0.5).fromTo(logoRobot, 1, {
      scale: 1.3
      transformOrigin: '50% 50%'
    },
      scale: 1
      autoAlpha: 1
      ease: Power4.easeOut).to('#fake-mask-name ', 1, {
      x: 360
      ease: Power4.easeOut
    }, '=-1').to '#fake-mask-slogan ', 1, {
      scaleX: 0
      ease: Power4.easeOut
    }, '=-1'
    tl_logo.pause()

    tl_topBar = new TimelineMax
    tl_topBar.to(topBar, 1,
      y: 100
      autoAlpha: 1
      ease: Power4.easeInOut).staggerFrom '.navbar-nav.left .anim', 0.6, {
      y: -100
      opacity: 0
      delay: 0
      ease: Back.easeOut
      force3D: true
    }, 0.2
    tl_topBar.pause()


    if $('.intro').length
      console.log ($('.intro').height())
      TweenMax.fromTo backgroundIntro, 3, {
        y: 30
        delay: 1
      },
        y: 0
        autoAlpha: 1
        ease: Power4.easeInOut
        delay: 1
      TweenMax.fromTo backgroundIntroMan, 3, {
        y: 30
        delay: 1
      },
        y: 0
        autoAlpha: 1
        ease: Power4.easeInOut
        delay: 2
      if window.matchMedia('(max-width: 320px)').matches
        TweenMax.fromTo h2, 1, {
          y: 0
          delay: 2
        },
          y: 40
          autoAlpha: 1
          ease: Power4.easeInOut
          delay: 2
      else if window.matchMedia('(max-width: 360px)').matches
        TweenMax.fromTo h2, 1, {
          y: 0
          delay: 2
        },
          y: 40
          autoAlpha: 1
          ease: Power4.easeInOut
          delay: 2
      else if window.matchMedia('(max-width: 767px)').matches
        TweenMax.fromTo h2, 1, {
          y: 0
          x: 0
          delay: 2
        },
          y: 80
          x: 0
          autoAlpha: 1
          ease: Power4.easeInOut
          delay: 2
      else
        TweenMax.fromTo h2, 1, {
          y: 30
          x: 50
          delay: 2
        },
          y: 0
          x: 50
          autoAlpha: 1
          ease: Power4.easeInOut
          delay: 2
        TweenMax.fromTo lead, 1, {
          y: 20
          x: 50
          delay: 2
        },
          y: 10
          x: 50
          autoAlpha: 1
          ease: Power4.easeInOut
          delay: 2
        TweenMax.fromTo btnDiscover, 4, {
          y: $('.intro').height()
          ease: Power4.easeInOut
          delay: 1.3
        },
          y: $('.intro').height() - 100
          autoAlpha: 1
          ease: Power4.easeInOut
          delay: 1.3
    else
      TweenMax.set topBar,
        y: 100
        autoAlpha: 1
    tl_logo.play()
    tl_topBar.play()

    touchScroll = (event) ->
      event.preventDefault()
