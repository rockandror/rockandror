$(document).on('ready page:load', function () {
  $(function(){ $(document).foundation(); });
});

$(document).ready(function(){    
  var btnMenuInterval;  
  function btnMenuRemoveInterval() {
    clearInterval(btnMenuInterval);
    $(".btn-menu").css({"-webkit-transform":"translate(0px,50px)"});
  }

  function show_icon_menu(){
    clearInterval(btnMenuInterval);
    $(".btn-menu").css({"-webkit-transform":"translate(0px,-50px)"});
    btnMenuInterval = setInterval(btnMenuRemoveInterval, 2000); 
  }

  $(window).scroll(function(){
    show_icon_menu();
  });

  $('.btn-menu').on('click', function(event) {
    $('body').css('overflow-y','hidden');
    event.preventDefault();
  });

  //remove scroll into modal
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
    js.src = "//connect.facebook.net/it_IT/sdk.js#xfbml=1&version=v2.6&appId=677931358931239";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
});

function removeAnimation(){
    var isHomePage = document.getElementsByClassName('home');
    //remove animation navbar if not home
    if(!isHomePage.length){
      $('nav').removeClass("animated-blackwhite");
      $('nav').removeClass("delay-1");
      $('nav .title-area li ').removeClass("delay-3");
      $('nav .title-area li ').removeClass("animated-left-right");
      $('nav .title-area li ').removeClass("name");
      $('nav .welcome').remove();
      $('nav .name').removeClass("animated-left-right");
      $('nav .left > li').removeClass("animated-downtop");
      $('nav .left > li ').removeClass("animated-opacity");
      $('nav .right').removeClass("animated-opacity");
      $('nav .right').removeClass("delay-4");
      $('nav .left > li ').css('transform' , 'translateY(0px)');
      $('nav').css('background','#fff');
      $('nav .right').css('opacity','1');
    }
    //remove animation Smartphone
    if ($(window).width() < 375) {
      $('.webdings,.eatbooking,.oasis').removeClass('hidden');
    //remove animation is not home
    }else if(isHomePage.length > 0){
      //Webding section animate
      $('.webdings').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn', // Class to add to the elements when they are visible
        offset: 300
      });
      $('.webdings .image').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInLeft', // Class to add to the elements when they are visible
        offset: 300
      });
      $('.webdings .text-left').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInRight', // Class to add to the elements when they are visible
        offset: 300
      });   
      //Eatbooking section animate
      $('.eatbooking').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn', // Class to add to the elements when they are visible
        offset: 300
      });   
      $('.eatbooking .image').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInRight', // Class to add to the elements when they are visible
        offset: 300
      });   
      $('.eatbooking .text-left').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInLeft', // Class to add to the elements when they are visible
        offset: 300
      });  
      //Oasis section animate
      $('.oasis').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn', // Class to add to the elements when they are visible
        offset: 300
      });   
      $('.oasis .image').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInLeft', // Class to add to the elements when they are visible
        offset: 300
      });   
      $('.oasis .text-left').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInRight', // Class to add to the elements when they are visible
        offset: 300
      });  
      //Partecipation section animate
      $('.partecipation').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn', // Class to add to the elements when they are visible
        offset: 300
      });   
      $('.partecipation .gallery').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInLeft', // Class to add to the elements when they are visible
        offset: 300
      });
      $('.partecipation .text').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInRight', // Class to add to the elements when they are visible
        offset: 300
      });  
      //How we work section animate
      $('.howweworks').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn', // Class to add to the elements when they are visible
        offset: 300
      });   
      $('.howweworks .text-center').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp', // Class to add to the elements when they are visible
        offset: 300
      });   
      $('.howweworks .a1,.howweworks .a2,.howweworks .a3, .howweworks .a4,.howweworks .design,.howweworks .analysis,.howweworks .deployment,.howweworks .acept,.howweworks .launching,.howweworks .block-path,.howweworks .text').addClass("hidden");  
      $('.howweworks .analysis').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp', // Class to add to the elements when they are visible
        offset: 200
      });   
      $('.howweworks .analysis').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', design);
      function design(){
        $('.howweworks .design, .howweworks .a1').addClass("hidden").viewportChecker({
          classToAdd: 'visible animated fadeInUp'
        });
      }
      $('.howweworks .design').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', deployment);
      function deployment(){
        $('.howweworks .deployment, .howweworks .a2').addClass("hidden").viewportChecker({
          classToAdd: 'visible animated fadeInUp'
        });     
      }
      $('.howweworks .deployment').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', acept);
      function acept(){
        $('.howweworks .acept, .howweworks .a3').addClass("hidden").viewportChecker({
          classToAdd: 'visible animated fadeInUp'
        });     
      }
      $('.howweworks .acept').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', launching);
      function launching(){
        $('.howweworks .launching, .howweworks .a4').addClass("hidden").viewportChecker({
          classToAdd: 'visible animated fadeInUp'
        });     
      }
      $('.howweworks .launching').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', blockPath);
      function blockPath(){
        $('.howweworks .block-path').addClass("hidden").viewportChecker({
          classToAdd: 'visible animated fadeInUp'
        });     
      }
      $('.howweworks .block-path').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', text);
      function text(){
        $('.howweworks .text').addClass("hidden").viewportChecker({
          classToAdd: 'visible animated fadeIn'
        });     
      }
      $('.contactnow, .contactnow h3, .contactnow p, .contactnow span, .contactnow a').addClass("hidden");
      $('.contactnow').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 300 
      });     
      $('.contactnow').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', contactnowH3);
      function contactnowH3(){
        $('.contactnow h3').addClass("hidden").viewportChecker({
          classToAdd: 'visible animated flipInX'
        });     
        $('.contactnow span').addClass("hidden").viewportChecker({
          classToAdd: 'visible animated flipInX delay-1'
        });
        $('.contactnow a').addClass("hidden").viewportChecker({
          classToAdd: 'visible animated flipInX delay-2'
        });          
      }
      $('.footer').addClass("hidden");
      $('.footer').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 300 
      }); 
    }
}

window.onresize = function(event) { resizeDiv(); }
function resizeDiv() {
  h = $(window).height() - heightTopBar;
  $('.intro,.webdingspage .img-background,.eatbookingpage .img-background, .oasiscatamaranspage .img-background, .contactpage .img-background, .greetingspage .img-background').css({'height': h + 'px'});
  if ($(window).width() <= 1056) {
    $('.webdingspage .img-background, .eatbookingpage .img-background, .oasiscatamaranspage .img-background').css({'height': '160px'});
    

  }
}

var ready;
ready = function() {
  removeAnimation();
  resizeDiv();
};
$(document).on('page:update', ready);