$(document).ready(function(){  
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
   //  alert(navigator.userAgent);
  }
  var navHeight = $("nav").height();
  heightTopBar = $(".top-bar").height();
  h = $(window).height() - heightTopBar;

  var link_url_active,
    h1 = $(".video-container-show h1"),
    lead = $(".intro lead"),
    topcontact = $(".top-contact"),
    scroll = $("#btn_scroll"),
    plus = $("#btn_plus"),
    close = $("#btn_close"),
    back = $("#btn_back"),
    home = $("#btn_home"),
    works = $("#btn_works"),
    webdings = $("#btn_webdings"),
    eatbooking = $("#btn_eatbooking"),
    oasiscatamaran = $("#btn_oasiscatamaran"),
    team = $("#btn_team");
    phone = $("#btn_tel");
    email = $("#btn_email");
    container = $("#btn_container");
    containerSubMenu = $("#container_submenu");

  $('a[href*=#scroll_to_]:not([href=#])').click(function() {
    $( this ).parent().addClass('active');
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        if($(window).width() <= 768){
          $('html,body').animate({ scrollTop:target.offset().top }, 700);  
        }else{
          $('html,body').animate({ scrollTop:target.offset().top-200 }, 700);         
        }
        return false;         
      }
    }
  });
  
  var introSection = $('.bg-background');
  var introSectionHeight = introSection.height();
  
  /***SCROLL IMAGE */
  // var introSection = $('.bg-background'),
  // introSectionHeight = introSection.height(),
  //change scaleSpeed if you want to change the speed of the scale effect
  //scaleSpeed = 1.4,
  //change opacitySpeed if you want to change the speed of opacity reduction effect
  //opacitySpeed = 1;  
  //update this value if you change this breakpoint in the style.css file (or _layout.scss if you use SASS)
  //var MQ = 1024;
  //triggerAnimation();
  //$(".intro .bg-background").removeClass("hide-opacity");
  //$(".intro .bg-background").addClass("show-opacity");
  //$(".intro lead").addClass("show-opacity");
  //$(".btn-scroll").addClass("show-opacity");

  $(window).on('resize', function(){
    //triggerAnimation();
  });
  
  //bind the scale event to window scroll if window width > $MQ (unbind it otherwise)
  // function triggerAnimation(){
  //   if($(window).width()>= MQ) {
  //     $(window).on('scroll', function(){
  //       if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
  //       }else{
  //         window.requestAnimationFrame(animateIntro);
  //       }
  //       //The window.requestAnimationFrame() method tells the browser that you wish to perform an animation- the browser can optimize it so animations will be smoother
  //     });
  //   } else {
  //     $(window).off('scroll');
  //   }
  // }

  
  // function animateIntro () {
  //   var scrollPercentage = ($(window).scrollTop()/introSectionHeight).toFixed(5),
  //   scaleValue = 1 + scrollPercentage*scaleSpeed;
  //   if( $(window).scrollTop() < introSectionHeight) {
  //     introSection.css({
  //       '-moz-transform': 'scale(' + scaleValue + ') translateZ(0)',
  //       '-webkit-transform': 'scale(' + scaleValue + ') translateZ(0)',
  //       '-ms-transform': 'scale(' + scaleValue + ') translateZ(0)',
  //       '-o-transform': 'scale(' + scaleValue + ') translateZ(0)',
  //       'transform': 'scale(' + scaleValue + ') translateZ(0)',
  //       'opacity': 1 - scrollPercentage*opacitySpeed
  //     });
  //   }
  // }

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


   

   
  // $(window).scroll(function(){
  //   firstSwitchButton();
  //  });  

    window.onload = function(){
      console.log("On Complete page");
      //loadAnimation();
      
  }


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
  
  // (function(d, s, id) {
  //   var js, fjs = d.getElementsByTagName(s)[0];
  //   if (d.getElementById(id)) return;
  //   js = d.createElement(s); js.id = id;
  //   js.src = "//connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v2.6&appId=677931358931239";
  //   fjs.parentNode.insertBefore(js, fjs);
  // }(document, 'script', 'facebook-jssdk'));
});


window.onresize = function(event) {
  resizeDiv();   
}


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
  checkPosition();
  //loadAnimation();
};
$(document).on('page:update', ready);