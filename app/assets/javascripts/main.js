var
  navHeight = $("nav").height(),
  heightTopBar = $(".top-bar").height(),
  windowHeight = $(window).height() - heightTopBar;
  windowWidth = $(window).width();

function init(){
  if (window.matchMedia('(min-width: 769px)').matches) {
    if($('.home').length > 0) {
      setHeight();
    }
  }else{
    // windowHeight = $(window).innerHeight();
    // $('section.contact').css('height', windowHeight);
    // console.log("set height contact");
  }

  animation();
  resizeDiv();
  scrollToSection();
  $('li.anim.has-dropdown.portfolio.not-click').click(function(){
    //return false;
  });

}

function resizeDiv() {
  if(windowHeight <= 1025){
    $(".intro .container a").css('margin-top','20px');
    $(".intro").css({'height': $(window).height() + 'px'});
  }
  if(windowHeight == 1280 && windowWidth == 800){
    //Nexus 10
    $(".intro .container a").css('margin-top','20px');
    $(".intro").css({'height': $(window).height() + 'px'});
  }
}

function scrollToSection(){
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

function setHeight() {
  windowHeight = $(window).innerHeight();
  //$('section').css('height', windowHeight);
};

$(window).on('resize', function(){
  resizeDiv();
  setHeight();
});

var ready;
ready = function() {
  //$(document).foundation();
  init();
};

$(document).on('page:update', ready);
