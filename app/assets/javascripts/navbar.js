//Check this code - i don't know if work
//Auto close navbar on click outside in XS mode
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

  //Auto close navbar XS mode on click link navbar
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
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