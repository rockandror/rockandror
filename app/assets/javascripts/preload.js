$(window).load(function() {
  preload();
});

function preload(){
  window.setTimeout(function(){
    $(".loading").fadeOut();
  }, 1000);
  scrollalert();
  console.log("ok");
}

function scrollalert(){
  if ($('.alert').length){
    $("html, body").delay(3000).animate({scrollTop: $('#scroll_to_contact').offset().top }, 2000);
  }
}