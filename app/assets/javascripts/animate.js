(function(){
  "use strict";
  App.Animate = {
    initialize: function() {
      var tl_logo, tl_topbar;
      tl_logo = App.Animate.logo();
      tl_logo.play().delay(1.4);
      tl_topbar = App.Animate.topBar();
      tl_topbar.play().delay(1);
      if ($(".intro").length > 0) {
        App.Animate.intro();
      }
      if ($('.cookies-eu').length > 0) {
        var tl_cookies = App.Animate.cookies();
        tl_cookies.play().delay(3);
      }
    },
    logo: function() {
      var
        logoCircle = $('circle'),
        logoRobot = $('#robot'),
        topBar = $('.top-bar');

      var tl_logo = new TimelineMax()
        .fromTo(logoCircle, 1, {scale:0.6, transformOrigin: "50% 50%"}, {scale:1, autoAlpha:1, ease: Power4.easeOut,delay:0.5})
        .fromTo(logoRobot, 1, {scale:1.3, transformOrigin: "50% 50%"}, {scale:1, autoAlpha:1, ease: Power4.easeOut})
        .to('#fake-mask-name ',1, { x:360,ease:Power4.easeOut},'=-1')
        .to('#fake-mask-slogan ',1, { scaleX:0,ease:Power4.easeOut},'=-1')
      tl_logo.pause();
      return tl_logo;
    },
    topBar: function() {
      var topBar = $('.top-bar');
      var tl_topBar = new TimelineMax()
        .to(topBar, 1, { autoAlpha:1, ease:Power4.easeInOut});
      tl_topBar.pause();
      return tl_topBar;
    },
    cookies: function() {
      var cookies = $('.cookies-eu')
      var tl_cookies = new TimelineMax()
        .to(cookies, 1, { autoAlpha:1, ease:Power4.easeInOut})
      tl_cookies.pause();
      return tl_cookies;
    },
    intro: function() {
      var
        logoCircle = $('circle'),
        logoRobot = $('#robot'),
        topBar = $('.top-bar'),
        backgroundIntro = $('.bg-background'),
        backgroundIntroStars = $('.bg-stars'),
        backgroundIntroMan = $('.bg-man'),
        h2 = $(".intro .container h2"),
        h1 = $(".intro .container h1"),
        lead = $(".intro lead"),
        btnDiscover = $("#btn-discover"),
        backgroundIntroHeight = $(window).height();

        $(".intro").css("height", backgroundIntroHeight);
        TweenMax.fromTo(backgroundIntro, 3,
          {y:30, delay:1},
          {y:0, autoAlpha:1, ease:Power4.easeInOut,delay:1});

        TweenMax.fromTo(backgroundIntroMan, 3,
          {y:30, delay:1},
          {y:0, autoAlpha:1, ease:Power4.easeInOut,delay:2});

        TweenMax.fromTo(backgroundIntroStars, 3,
          {y:30, delay:3},
          {y:0, autoAlpha:1, ease:Power4.easeInOut,delay:3});

        TweenMax.fromTo(h2, 1,
          {y:30, delay:2},
          {y:0, autoAlpha:1, ease:Power4.easeInOut,delay:2});

        TweenMax.fromTo(lead, 1,
          {y:20, delay:2},
          {y:-30, autoAlpha:1, ease:Power4.easeInOut,delay:2});

        TweenMax.fromTo(h1, 1,
          {y:0, delay:2},
          {y:-40, autoAlpha:1, ease:Power4.easeInOut,delay:3});

        TweenMax.fromTo(btnDiscover, 4,
          { ease:Power4.easeInOut,delay:1.3},
          { autoAlpha:1, ease:Power4.easeInOut,delay:1.3})
    }
  }
}).call(this);
