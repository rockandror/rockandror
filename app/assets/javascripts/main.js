//Preload
 
$(window).load(function() {
  // start up after 2sec no matter what
  window.setTimeout(function(){
    $(".loading").fadeOut();
  }, 1000);
  scrollalert();
});
  
$(function () {
  //headroom
  headroom();
  
  //remove hidden class section if XS
  if (window.innerHeight > window.innerWidth) { 
    } else {
      scrollPage();
    }

  //Auto close navbar XS mode on click outside
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

  $(".nav a").on("click", function(){
    $(".nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
  });

  //tooltips 
  $('[data-toggle="tooltip"]').tooltip();

  //scroll to section on click button menu  
  $('a[href*=#]:not([href=#])').click(function() {
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

//check if alert danger exist in home page and scroll to contact
function scrollalert(){
  if ($('#alert-danger').length){
    $("html, body").delay(3000).animate({scrollTop: $('#contact').offset().top }, 2000);
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
function scrollPage(){
    $('section').addClass("hidden-section").viewportChecker({
      classToAdd: 'visible-section animated fadeIn',// Class to add to the elements when they are visible
      offset: 200    
    });
  }