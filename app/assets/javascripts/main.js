// $(document).on('ready page:load', function () {
//   //$(function(){ $(document).foundation(); });
// });

$(document).ready(function(){    
  $('a[href*=#scroll_to_]:not([href=#])').click(function() {
    $( this ).parent().addClass('active');
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 700);
        return false;
      }
    }
  });

  var btnMenuInterval;  
  function btnMenuRemoveInterval() {
    clearInterval(btnMenuInterval);
    $(".btn-menu").css({"-webkit-transform":"translate(0px,50px)"});
    $(".btn-menu").css({"-moz-transform":"translate(0px,50px)"});
    $(".btn-menu").css({"-o-transform":"translate(0px,50px)"});
    $(".btn-menu").css({"-ms-transform":"translate(0px,50px)"});

    $(".top-contact").css({"-webkit-transform":"translate(0px,-50px)"});
    $(".top-contact").css({"-moz-transform":"translate(0px,-50px)"});
    $(".top-contact").css({"-o-transform":"translate(0px,-50px)"});
    $(".top-contact").css({"-ms-transform":"translate(0px,-50px)"});
  }
  function show_menu_smartphone(){
    clearInterval(btnMenuInterval);
    $(".btn-menu").css({"-webkit-transform":"translate(0px,-50px)"});
    $(".btn-menu").css({"-moz-transform":"translate(0px,-50px)"});
    $(".btn-menu").css({"-o-transform":"translate(0px,-50px)"});
    $(".btn-menu").css({"-ms-transform":"translate(0px,-50px)"});

    $(".top-contact").css({"-webkit-transform":"translate(0px,0px)"});
    $(".top-contact").css({"-moz-transform":"translate(0px,0px)"});
    $(".top-contact").css({"-o-transform":"translate(0px,0px)"});
    $(".top-contact").css({"-ms-transform":"translate(0px,0px)"});
    btnMenuInterval = setInterval(btnMenuRemoveInterval, 2000); 
  }
  
  var x;
  function zoom_image_intro(){
    x = $(window).scrollTop();
    if ($(window).width() >= 1024) {
    // $(".intro").css('background-size',100 + parseInt(x / 2, 0) + '% ');
    }else{
    //  $(".intro").css('background-size', 'cover');
    }
  }

  window.wasScrolled = false;
  function first_scroll(){
    if (!window.wasScrolled){
      if ( $( "#scroll_to_rockandror" ).length ) {  
        var top = $('html').find($("#scroll_to_rockandror")).offset().top -150;
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
    zoom_image_intro();
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
  
  heightTopBar = $(".top-bar").height();
  
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