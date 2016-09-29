var
  navHeight = $("nav").height(),
  heightTopBar = $(".top-bar").height(),
  hightWindow = $(window).height() - heightTopBar;


function init(){
  animation();
  resizeDiv();
  scrollTo();
}

function resizeDiv() {
  if(hightWindow <= 1025){
    $(".intro .container a").css('margin-top','20px'); 
    $(".intro").css({'height': $(window).height() + 'px'});
  }
}

function scrollTo(){
  $('a[href*=#scroll_to_]:not([href=#])').click(function() {
    $( this ).parent().addClass('active');
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        if($(window).width() <= 768){
          $('html,body').animate({ scrollTop:target.offset().top }, 700);  
        }else{
          $('html,body').animate({ scrollTop:target.offset().top }, 700);         
        }
        return false;         
      }
    }
  });
}

$(window).on('resize', function(){
  resizeDiv();
});

var ready;
ready = function() {
  $(document).foundation();
  init();
};

$(document).on('page:update', ready);