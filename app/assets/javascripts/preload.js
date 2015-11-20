$(window).load(function() {
  preload();
});

function preload(){
  window.setTimeout(function(){
    $(".loading").fadeOut();
  }, 1000);
  scrollalert();
}