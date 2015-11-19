//Preload
$(window).load(function() {
  preload();
});

// $(window).scroll(function(){

//     var wScroll = $(this).scrollTop();
//     var about = $('#scroll_to_about').offset().top - ($(window).height());
//      console.log(about);
//       if(wScroll > about) {
//         $( "#scroll_to_about" ).fadeIn( "slow");
//       }

  
// });


$(function () {
  //Set section height window height
  $("#scroll_to_about, #scroll_to_tecnology,#scroll_to_howworks,#scroll_to_services,#scroll_to_portfolio,#scroll_to_team").css({ minHeight: $(window).innerHeight() + 'px' });
  $(window).resize(function() {
    $("#scroll_to_about, #scroll_to_tecnology,#scroll_to_howworks,#scroll_to_services,#scroll_to_portfolio,#scroll_to_team").css({ minHeight: $(window).innerHeight() + 'px' });
  });

  // Changing menu dependent on section
$(window).scroll(function() {
  var windowTop = Math.max($('body').scrollTop(), $('html').scrollTop());  
    $('.pageSection').each(function (index) {
      if (windowTop > ($(this).position().top - ($(window).height() / 1.2))){
        //var nameid = $('.pageSection:eq(' + index + ')').attr('id');
        //$('nav.top-bar-section ul li :eq(' + index + ')').parent().addClass('active');
        //$('.top-bar-section ul li').removeClass('active'); 
        //$('.top-bar-section ul li:eq(' + index + ')').addClass('active');
        //$('.top-bar-section ul li').removeClass('active'); 
        //console.log($('.top-bar-section ul li:eq(' + index + ')').attr('id'));
        $('.pageSection:eq(' + index + ')').addClass('addopacity');
          console.log($('.pageSection:eq(' + index + ')').attr('id'));
        }
        if (windowTop >= 300) {
         $('.contain-to-grid').css( 'background', 'black' );        
        }
    });
}).scroll();


  //Set distance form section to top of window
  //var distance = $('#scroll_to_about').offset().top - ($(window).height() / 1.2);

  //$window = $(window);
  //On scroll animation intro and show section
  // $(window).scroll(function(){
  //   var wScroll = $(this).scrollTop();
  //   // $('.moon').css({'transform' : 'translate(0px, '+ wScroll * 2 +'%)'});
  //   // $('.faces').css({'transform' : 'translate(0px,  '+ '-' + wScroll / 2 +'%)'});
  //   // $('.title').css({'transform' : 'translate(0px,  '+ wScroll / 2 +'%)'});    
  //   //console.log($('section').attr('id'));

  //   if ( $window.scrollTop() >= distance ) {
  //     scroll_to_about();
      
  //     $('.contain-to-grid').css( 'background', 'black' );
      
  //     $('.top-bar-section ul li').removeClass('active'); 
  //     $( "#scroll_to_about" ).parent().addClass('active');
  //   }

  // });
  // function scroll_to_about(){
  //   $('#scroll_to_about').fadeTo("fast", 1);
  // }




//Foundation gallery
$('.gallery').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  autoplay: true,
  cssEase: 'linear'
});

  //headroom
  //headroom();
  checkHeight();
  //Auto close navbar on click outside in XS mode
  $('body').bind('click', function(e) {
    if(jQuery(e.target).closest('.navbar').length == 0) {
      console.log("fuori");
      var opened = jQuery('.navbar-collapse').hasClass('collapse in');
      if ( opened === true ) {
        jQuery('.navbar-collapse').collapse('hide');
      }
    }
  });

  //Auto close navbar XS mode on click link navbar
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });

  //tooltips 
  //$('[data-toggle="tooltip"]').tooltip();

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

//Preload
function preload(){
  window.setTimeout(function(){
    $(".loading").fadeOut();
  }, 1000);
  scrollalert();
}

//check if alert danger exist in home page and scroll to contact
function scrollalert(){
  if ($('#alert-danger').length){
    $("html, body").delay(3000).animate({scrollTop: $('#contact').offset().top }, 2000);
  }
}

//If XS, remove effects fadein section on scroll
function checkHeight(){
  if (window.innerHeight > window.innerWidth) { 
  } else {
    //scrollPage();
  }
}

//Headroom
/*
function headroom(){ 
 var myElement = document.querySelector("nav");
 var headroom = new Headroom(myElement, {
    "offset": 40,
    "tolerance": 5,
    "classes": {
      "initial": "animated",
      "pinned": "headroom-pinned",
      "unpinned": "headroom--unpinned"
    }
  });
  headroom.init();
}
*/

//on scroll, show section 
/*
function scrollPage(){
  $('section').addClass("hidden-section").viewportChecker({
    classToAdd: 'visible-section animated fadeIn',// Class to add to the elements when they are visible
    offset: 200    
  });
}
*/

//Btn up
/*
var $win = $(window);
$win.scroll(function () {
  if ($win.scrollTop() == 0)
    $('#btn-up').hide();
  else if ($win.height() + $win.scrollTop() == $(document).height()) { 
    $('#btn-up').show();
  }
});
*/