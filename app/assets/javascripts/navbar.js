$(function () {
  $(document).on("scroll", onScroll);
  
  function onScroll(event){

    var windowTop = Math.max($('body').scrollTop(), $('html').scrollTop());  
    $('.pageSection').each(function (index) {
      if (windowTop > ($(this).position().top - ($(window).height() / 1.2))){
        $('.pageSection:eq(' + index + ')').addClass('addopacity');
      }
      if (windowTop >= 300) {
       $('.contain-to-grid').css( 'background', 'black' );        
     }
   });
    var scrollPos = $(document).scrollTop();
    $('.top-bar-section a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos ) {
        $('.top-bar-section li').removeClass("active");
        currLink.parent().addClass("active");
      }
      else{
        currLink.removeClass("active");
      }
    });
  }
  $('.top-bar-section ul.right li a').click(function() {
    $('.top-bar').removeClass('expanded');
  });
  $('body').bind('click', function(e) {
    if(jQuery(e.target).closest('.navbar').length == 0) {
      var opened = jQuery('.navbar-collapse').hasClass('collapse in');
      if ( opened === true ) {
        jQuery('.navbar-collapse').collapse('hide');
      }
    }
  });
});