$(document).ready(function(){    
  
  var navHeight = $("nav").height();
  $('a[href*=#scroll_to_]:not([href=#])').click(function() {
    $( this ).parent().addClass('active');
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({ scrollTop:target.offset().top-200 }, 700);
        return false;
      }
    }
  });

  var btnMenuInterval;  
  function btnMenuRemoveInterval() {
    clearInterval(btnMenuInterval);
    $(".btn-menu").css({"-webkit-transform":"translate(0px,-150px)"});
    $(".btn-menu").css({"-moz-transform":"translate(0px,-150px)"});
    $(".btn-menu").css({"-o-transform":"translate(0px,-150px)"});
    $(".btn-menu").css({"-ms-transform":"translate(0px,-150px)"});

    $(".top-contact").css({"-webkit-transform":"translate(0px,-50px)"});
    $(".top-contact").css({"-moz-transform":"translate(0px,-50px)"});
    $(".top-contact").css({"-o-transform":"translate(0px,-50px)"});
    $(".top-contact").css({"-ms-transform":"translate(0px,-50px)"});
  }
  function show_menu_smartphone(){
    clearInterval(btnMenuInterval);
    $(".btn-menu").css({"-webkit-transform":"translate(0px,50px)"});
    $(".btn-menu").css({"-moz-transform":"translate(0px,50px)"});
    $(".btn-menu").css({"-o-transform":"translate(0px,50px)"});
    $(".btn-menu").css({"-ms-transform":"translate(0px,50px)"});

    $(".top-contact").css({"-webkit-transform":"translate(0px,0px)"});
    $(".top-contact").css({"-moz-transform":"translate(0px,0px)"});
    $(".top-contact").css({"-o-transform":"translate(0px,0px)"});
    $(".top-contact").css({"-ms-transform":"translate(0px,0px)"});
    btnMenuInterval = setInterval(btnMenuRemoveInterval, 2000); 
  }
  
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

  //assign a scale transformation to the introSection element and reduce its opacity
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
  /*FINSH SCROLL */
  window.wasScrolled = false;
  function first_scroll(){
    if (!window.wasScrolled){
      if ( $( "#scroll_to_rockandror" ).length ) {  
        var top = $('html').find($("#scroll_to_rockandror")).offset().top-200;
        $('html, body').animate({scrollTop: top },1000)
      }
    }
    window.wasScrolled = true;
  }
  
  function navbar_show_hide(){ 
    var nav = $('.top-bar');
    var top = 250;
    if ($(window).scrollTop() >= top &&  $(window).width() >= 1024)  {
      nav.removeClass('remove-fixed');
      nav.addClass('fixed');
    } else {
       nav.removeClass('fixed');
       nav.addClass('remove-fixed');
    }
  }

  $(window).scroll(function(){
    show_menu_smartphone();
    first_scroll();
    navbar_show_hide();
  });

  $('.btn-menu').on('click', function(event) {
    $('body').css('overflow-y','hidden');
    event.preventDefault();
  });

  $('#nav-modal .close-reveal-modal').on('click', function(event) {
    $('body').css('overflow-y','auto');
    event.preventDefault();
  });

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

heightTopBar = $(".top-bar").height();
window.onresize = function(event) { resizeDiv(); }
function resizeDiv() {
  h = $(window).height() - heightTopBar;
  $('.intro, .webdingspage .img-background,.eatbookingpage .img-background, .oasiscatamaranspage .img-background, .contactpage .img-background, .greetingspage .img-background').css({'height': h + 'px'});
  if ($(window).width() <= 1056) {
    $('.webdingspage .img-background, .eatbookingpage .img-background, .oasiscatamaranspage .img-background, .contactpage .img-background, .greetingspage .img-background').css({'height': '160px'});
  }
}

var ready;
ready = function() {
  $(document).foundation();
  resizeDiv();
};
$(document).on('page:update', ready);