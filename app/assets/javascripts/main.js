$(function () {
  //Mouse scroll
  jQuery.scrollSpeed(100, 800);
    
  //scroll to section on click button menu  
  $('a[href*=#scroll_to_]:not([href=#])').click(function() {
    $('.top-bar-section ul li').removeClass('active'); 
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
})