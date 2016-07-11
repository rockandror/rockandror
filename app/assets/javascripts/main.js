// $(document).on('ready page:load', function () {
//   //$(function(){ $(document).foundation(); });
// });

$(document).ready(function(){    
  
  // var btnMenuInterval;  
  // function btnMenuRemoveInterval() {
  //   clearInterval(btnMenuInterval);
  //   $(".btn-menu").css({"-webkit-transform":"translate(0px,50px)"});
  // }

  // function show_icon_menu(){
  //   clearInterval(btnMenuInterval);
  //   $(".btn-menu").css({"-webkit-transform":"translate(0px,-50px)"});
  //   btnMenuInterval = setInterval(btnMenuRemoveInterval, 2000); 
  // }

  // $(window).scroll(function(){
  //   show_icon_menu();
  // });

  // $('.btn-menu').on('click', function(event) {
  //   $('body').css('overflow-y','hidden');
  //   event.preventDefault();
  // });

  //remove scroll into modal
  // $('#nav-modal .close-reveal-modal').on('click', function(event) {
  //   $('body').css('overflow-y','auto');
  //   event.preventDefault();
  // });

  // $(document).on('click tap touchstart', '.reveal-modal-bg', function() {
  //   $('body').css('overflow-y','auto');
  // }); 
  
  heightTopBar = $(".top-bar").height();
  
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/it_IT/sdk.js#xfbml=1&version=v2.6&appId=677931358931239";
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