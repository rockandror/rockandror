$(function () {
  // Changing menu dependent on section
  $(window).scroll(function() {
    var windowTop = Math.max($('body').scrollTop(), $('html').scrollTop());  
      $('.pageSection').each(function (index) {
        if (windowTop > ($(this).position().top - ($(window).height() / 1.2))){
            $('.pageSection:eq(' + index + ')').addClass('addopacity');
            //console.log($('.pageSection:eq(' + index + ')').attr('id'));
          }
          if (windowTop >= 300) {
           $('.contain-to-grid').css( 'background', 'black' );        
          }
      });
  }).scroll();

  $('.top-bar-section ul.right li a').click(function() {
    console.log("s");
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