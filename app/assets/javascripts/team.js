$(function () {
  $('.flipper').bind('touchstart', function(){
    console.log("front");
    //$(this).addClass('select');
    }).bind('touchend', function(){
      console.log("back");
    //$(this).removeClass('select');
  });

  
});