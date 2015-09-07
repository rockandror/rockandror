//Preload
$(window).load(function() {
  // start up after 2sec no matter what
  window.setTimeout(function(){
    $(".loading").fadeOut();
  }, 2000);
});
 
$(function () {
  //Hide show navbar
  var myElement = document.querySelector("nav");
  var headroom = new Headroom(myElement, {
    "offset": 205,
    "tolerance": 25,
    "classes": {
      "initial": "animated",
      "pinned": "headroom-pinned",
      "unpinned": "headroom--unpinned"
    }
  });
  headroom.init();
 
  $('[data-toggle="tooltip"]').tooltip();

  //On scroll, show section 
  $('section').addClass("hidden-section").viewportChecker({
    classToAdd: 'visible-section animated fadeIn', // Class to add to the elements when they are visible
    offset: 200    
  });
  
  //Scroll to section on click menu button
  $('a[href*=#]:not([href=#])').click(function() {
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
 