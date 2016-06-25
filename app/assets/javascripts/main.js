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
  heightTopBar = $(".top-bar").height();
  resizeDiv();

  $('.about h3').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeInUp', // Class to add to the elements when they are visible
    offset: 200    
   });
  $('.about .button').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeInUp', // Class to add to the elements when they are visible
    offset: 150    
   });

  $('.webdings').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeIn', // Class to add to the elements when they are visible
    offset: 300
   });   

  $('.webdings .gallery').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeInLeft', // Class to add to the elements when they are visible
    offset: 300
   });   

  //$('#yourElement').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', doSomething);


  $('.webdings .text-left').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeInRight', // Class to add to the elements when they are visible
    offset: 300
   });   

  $('.eatbooking').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeInRight', // Class to add to the elements when they are visible
    offset: 300
   });   

});
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