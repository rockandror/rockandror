$(function () {
  //Mouse scroll
  //jQuery.scrollSpeed(100, 800);
    
  //scroll to section on click button menu  
  // $('a[href*=#scroll_to_]:not([href=#])').click(function() {
  //   $('.top-bar-section ul li').removeClass('active'); 
  //   $( this ).parent().addClass('active');
  //   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  //     var target = $(this.hash);
  //     target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  //     if (target.length) {
  //       $('html,body').animate({
  //         scrollTop: target.offset().top
  //       }, 700);
  //       return false;
  //     }
  //   }
  // });
})

 
$(document).ready(function(){
  $('.about h3').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeInUp', // Class to add to the elements when they are visible
    offset: 200    
   });
  $('.about .button').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeInUp', // Class to add to the elements when they are visible
    offset: 150    
   });
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

});

heightTopBar = $(".top-bar").height();
resizeDiv();


window.onresize = function(event) {
  resizeDiv();
}
function resizeDiv() {
  h = $(window).height() - heightTopBar;
  $('.intro').css({'height': h + 'px'});
}


// var $animation_elements = $('.animation-element');
// var $window = $(window);

// function check_if_in_view() {
//   var window_height = $window.height();
//   var window_top_position = $window.scrollTop();
//   var window_bottom_position = (window_top_position + window_height);

//   $.each($animation_elements, function() {
//     console.log(window_bottom_position);
//     var $element = $(this);
//     var element_height = $element.outerHeight();
//     var element_top_position = $element.offset().top;
//     var element_bottom_position = (element_top_position + element_height);
    
//     //check to see if this current container is within viewport
//     if ((element_bottom_position >= window_top_position) &&
//         (element_top_position <= window_bottom_position)) {
//       $element.addClass('in-view');
//     } else {
//       $element.removeClass('in-view');
//     }
//   });
// }

// $window.on('scroll resize', check_if_in_view);
// $window.trigger('scroll');