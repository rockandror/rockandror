$(function () {
  //Set section height window height
  $("#scroll_to_about, #scroll_to_tecnology,#scroll_to_howworks,#scroll_to_services,#scroll_to_portfolio,#scroll_to_team").css({ minHeight: $(window).innerHeight() + 'px' });
  $(window).resize(function() {
    $("#scroll_to_about, #scroll_to_tecnology,#scroll_to_howworks,#scroll_to_services,#scroll_to_portfolio,#scroll_to_team").css({ minHeight: $(window).innerHeight() + 'px' });
  });
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
  //check if alert danger exist in home page and scroll to contact
})

 

//check if alert danger exist in home page and scroll to contact
// function scrollalert(){
//   if ($('#alert-danger').length){
//     $("html, body").delay(3000).animate({scrollTop: $('#contact').offset().top }, 2000);
//   }
// }
 
//Btn up
// var $win = $(window);
// $win.scroll(function () {
//   if ($win.scrollTop() == 0)
//     $('#btn-up').hide();
//   else if ($win.height() + $win.scrollTop() == $(document).height()) { 
//     $('#btn-up').show();
//   }
// });
