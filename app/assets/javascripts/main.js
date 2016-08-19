$(document).ready(function(){
  var navHeight = $("nav").height();
  heightTopBar = $(".top-bar").height();
  h = $(window).height() - heightTopBar;


  // $('a[href*=#scroll_to_]:not([href=#])').click(function() {
  //   $( this ).parent().addClass('active');
  //   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  //     var target = $(this.hash);
  //     target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  //     if (target.length) {
  //       if($(window).width() <= 768){
  //         $('html,body').animate({ scrollTop:target.offset().top }, 700);  
  //       }else{
  //         $('html,body').animate({ scrollTop:target.offset().top-200 }, 700);         
  //       }
  //       return false;         
  //     }
  //   }
  // });
  
  /***SCROLL IMAGE */
  var introSection = $('.bg-background'),
  introSectionHeight = introSection.height(),
  //change scaleSpeed if you want to change the speed of the scale effect
  scaleSpeed = 1.4,
  //change opacitySpeed if you want to change the speed of opacity reduction effect
  opacitySpeed = 1;  
  //update this value if you change this breakpoint in the style.css file (or _layout.scss if you use SASS)
  var MQ = 1024;
  triggerAnimation();
  $(".intro .bg-background").removeClass("hide-opacity");
  $(".intro .bg-background").addClass("show-opacity");
  $(".intro lead").addClass("show-opacity");
  $(".btn-scroll").addClass("show-opacity");

  $(window).on('resize', function(){
    triggerAnimation();
  });
  
  //bind the scale event to window scroll if window width > $MQ (unbind it otherwise)
  function triggerAnimation(){
    if($(window).width()>= MQ) {
      $(window).on('scroll', function(){
        if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
        }else{
          window.requestAnimationFrame(animateIntro);
        }
        //The window.requestAnimationFrame() method tells the browser that you wish to perform an animation- the browser can optimize it so animations will be smoother
      });
    } else {
      $(window).off('scroll');
    }
  }

  
  function animateIntro () {
    var scrollPercentage = ($(window).scrollTop()/introSectionHeight).toFixed(5),
    scaleValue = 1 + scrollPercentage*scaleSpeed;
    if( $(window).scrollTop() < introSectionHeight) {
      introSection.css({
        '-moz-transform': 'scale(' + scaleValue + ') translateZ(0)',
        '-webkit-transform': 'scale(' + scaleValue + ') translateZ(0)',
        '-ms-transform': 'scale(' + scaleValue + ') translateZ(0)',
        '-o-transform': 'scale(' + scaleValue + ') translateZ(0)',
        'transform': 'scale(' + scaleValue + ') translateZ(0)',
        'opacity': 1 - scrollPercentage*opacitySpeed
      });
    }
  }

  // var btnscroll = $('.btn-scroll');
  // var btnshow = $('#btn-menu-responsive');

  // function showbtnmenu(){
  //   btnshow.css({
  //     '-moz-transform': 'scale(1)',
  //     '-webkit-transform': 'scale(1)',
  //     '-ms-transform': 'scale(1)',
  //     '-o-transform': 'scale(1)',
  //     'transform': 'scale(1)'
  //   });
  //   $(btnshow).addClass("rotate");
  //   btnshow.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
  //   });
  // }

  // function animateBtnscroll(){
  //   btnscroll.css({
  //     '-moz-transform': 'translate(0,140%)',
  //     '-webkit-transform': 'translate(0,140%)',
  //     '-ms-transform': 'translate(0,140%)',
  //     '-o-transform': 'translate(0,140%)',
  //     'transform': 'translate(0,140%)'
  //   });
  //   showbtnmenu();
  //   btnscroll.hide();
  // }

var
  topcontact = $(".top-contact");
  
  plus = $("#btn_plus"),
  close = $("#btn_close"),
  back = $("#btn_back"),
  home = $("#btn_home"),
  works = $("#btn_works"),
  team = $("#btn_team");
  phone = $("#btn_tel");
  email = $("#btn_email");
  container = $("#btn_container");
  containerSubMenu = $("#container_submenu");

  tl_submenu = new TimelineLite();

  tl_introSection = new TimelineLite();
  tl_topcontact = new TimelineLite();
  tl_plus = new TimelineLite();
  tl_plus_start = new TimelineLite();
  tl_close = new TimelineLite();
  tl_back = new TimelineLite();
  tl_home = new TimelineLite();
  tl_works = new TimelineLite();
  tl_team = new TimelineLite({onReverseComplete:reset});
  tl_phone = new TimelineLite();
  tl_email = new TimelineLite();
  tlContainer = new TimelineLite();

  tl_submenu.pause();
  tl_introSection.pause();
  
  tl_topcontact.play();
  tl_plus_start.pause();
  tl_plus.pause();
  
  tl_close.pause();
  tl_back.pause();
  tl_home.pause();
  tl_works.pause();
  tl_team.pause();
  tl_phone.pause();
  tl_email.pause();
  
  tlContainer.pause();

  tl_introSection
    .to(introSection, 1, {scaleX:3, scaleY:3,opacity:0.8, ease: Power4.easeInOut})
  tl_topcontact
    .to(topcontact, 0.5, {top: "0%",opacity:1, ease: Power4.easeInOut})
    .addPause();
  tl_plus_start
    .to(plus, 0.5, {top: "88%",opacity:1  , ease: Power4.easeInOut,delay:1})
    .addPause();
  tl_plus
    .to(plus, 0.5, {top: "100%",opacity:0, ease: Power4.easeInOut})
    .addPause();
  tl_close
    .to(close, 0.5, {top: "88%", opacity:1,ease: Power4.easeInOut, onComplete: show_menu})
    .addPause();
  tl_back
    .to(back, 0.5, {top: "88%", opacity:1,ease: Power4.easeInOut})
    .addPause();
  tl_home
    .to(home, 0.5, {top: "5%", opacity:1, ease: Power4.easeInOut})
    .addPause();
  tl_works
    .to(works, 0.5, {top: "25%", opacity:1, ease: Power4.easeInOut})
    .addPause();
  tl_team
    .to(team, 0.5, {top: "45%", opacity:1, ease: Power4.easeInOut})
    .addPause();
  tl_phone
    .to(phone, 0.5, {top: "65%", right: "-55%", opacity:1, ease: Power4.easeInOut})
    .addPause();
  tl_email
    .to(email, 0.5, {top: "65%", left: "-55%", opacity:1, ease: Power4.easeInOut})
    .addPause();
  tlContainer
    .to(container, 0.5, {visibility: "visible", opacity:1, ease: Power4.easeInOut})
    .to(container, 0.5, {backgroundColor: "#000", opacity:.8, ease: Power4.easeInOut})
    .addPause();
  tl_submenu
    .to(containerSubMenu, 0, {visibility: "visible", opacity:1, ease: Power4.easeInOut})
    .to(containerSubMenu, 1, {bottom: "15%", opacity:1, ease: Power4.easeInOut, onComplete: load_owlCarousel})
    .addPause();
    
  // {scale:0.5, opacity:0, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2);
  
  $(plus).on('click',function(){
    switchButton();
  });

  $(close).on('click',function(){
    close_menu();  
  });

  $(back).on('click',function(){
    close_submenu();
  });

  $(works).on('click',function(){
    open_submenu();
  });

  $(home).on('click',function(){
    close_menu();

  });

  function switchButton(){
    tl_plus.play();
    tl_close.play();
  }

  function show_menu(){
    tl_introSection.play();
    tl_topcontact.reverse();
    tlContainer.play();
    tl_home.play();
    tl_works.play();
    tl_team.play();
    tl_phone.play();
    tl_email.play();
  }

  function close_menu(){
    tl_home.reverse();
    tl_works.reverse();
    tl_team.reverse();
    tl_phone.reverse();
    tl_email.reverse();
  }

  function open_submenu(){
    tl_submenu.play();
    tl_close.reverse();
    tl_back.play();
  }
  
  function load_owlCarousel(){
    $(".owl-carousel").owlCarousel();
    TweenLite.to($(".owl-carousel"), 0.5, {y:0, opacity:1, ease: Power4.easeInOut});
    
  }

  function close_submenu(){
    TweenLite.to($(".owl-carousel"), 0.5, {y: -200, opacity:0, ease: Power4.easeInOut});

    //$(".owl-carousel").remove();
    tl_submenu.reverse();
    tl_back.reverse();
    tl_close.play();
  }

  function reset(){
    tl_plus.reverse();
    tl_close.reverse();
    tlContainer.reverse();
    tl_introSection.reverse();
    tl_topcontact.play();
    //location.replace("/webdings");
  }

  tl_plus_start.play();
  $(window).scroll(function(){
    // navbar_show_hide();
    // animateBtnscroll();
    //tl_plus_start.play();
  });  

  // $(".btn-scroll").on('click', function(event) {
  //   animateBtnscroll();  
  // });
  
  // $('#nav-modal .close-reveal-modal').on('click', function(event) {
  //   $('body').css('overflow-y','auto');
  //   event.preventDefault();
  // });

  $(document).on('click tap touchstart', '.reveal-modal-bg', function() {
    $('body').css('overflow-y','auto');
  }); 
  
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v2.6&appId=677931358931239";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
});

window.onresize = function(event) { resizeDiv(); }
function resizeDiv() {
  $('.webdingspage .img-background,.eatbookingpage .img-background, .oasiscatamaranspage .img-background, .contactpage .img-background, .greetingspage .img-background').css({'height': h + 'px'});
  if ($(window).width() <= 1056) {
    $('.webdingspage .img-background, .eatbookingpage .img-background, .oasiscatamaranspage .img-background, .contactpage .img-background, .greetingspage .img-background').css({'height': '160px'});
  }
  if(h <= 1025){
    $(".intro .video-container-show a").css('margin-top','20px'); 
    $(".intro").css({'height': $(window).height() + 'px'});
  }
}

var ready;
ready = function() {
  $(document).foundation();
  resizeDiv();
};
$(document).on('page:update', ready);