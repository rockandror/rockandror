//Preload
$(window).load(function() {
  preload();
});
  
$(function () {
  //headroom
  //headroom();
  checkHeight();
  //Auto close navbar on click outside in XS mode
  $('body').bind('click', function(e) {
    if(jQuery(e.target).closest('.navbar').length == 0) {
      console.log("fuori");
      var opened = jQuery('.navbar-collapse').hasClass('collapse in');
      if ( opened === true ) {
          jQuery('.navbar-collapse').collapse('hide');
      }
    }
  });
    
  //Auto close navbar XS mode on click link navbar
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });

  //tooltips 
  $('[data-toggle="tooltip"]').tooltip();

  //scroll to section on click button menu  
  $('a[href*=#scroll_to_]:not([href=#])').click(function() {
   // $('.navbar-toggle').click();  
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
})

//Preload
function preload(){
  window.setTimeout(function(){
    $(".loading").fadeOut();
  }, 1000);
  scrollalert();
}

//check if alert danger exist in home page and scroll to contact
function scrollalert(){
  if ($('#alert-danger').length){
    $("html, body").delay(3000).animate({scrollTop: $('#contact').offset().top }, 2000);
  }
}


//If XS, remove effects fadein section on scroll
function checkHeight(){
if (window.innerHeight > window.innerWidth) { 
  } else {
    scrollPage();
  }
}

//Headroom
function headroom(){ 
 var myElement = document.querySelector("nav");
 var headroom = new Headroom(myElement, {
    "offset": 40,
    "tolerance": 5,
    "classes": {
      "initial": "animated",
      "pinned": "headroom-pinned",
      "unpinned": "headroom--unpinned"
    }
  });
  headroom.init();
}
 
//on scroll, show section 
/*
function scrollPage(){
  $('section').addClass("hidden-section").viewportChecker({
    classToAdd: 'visible-section animated fadeIn',// Class to add to the elements when they are visible
    offset: 200    
  });
}
*/

//Btn up
var $win = $(window);
$win.scroll(function () {
  if ($win.scrollTop() == 0)
    $('#btn-up').hide();
  else if ($win.height() + $win.scrollTop() == $(document).height()) { 
    $('#btn-up').show();
  }
});

jQuery(function() { 
  $('.carousel').carousel();
});
