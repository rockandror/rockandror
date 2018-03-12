var
  navHeight = $("nav").height(),
  heightTopBar = $(".top-bar").height(),
  windowHeight = $(window).height() - heightTopBar;
  windowWidth = $(window).width();

function init(){
  animation();
  resizeDiv();
  scrollToSection();
  $('li.anim.has-dropdown.portfolio.not-click').click(function(){
    //return false;
  });
  updatePrice();
  // showFormErrors();
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

function updatePrice(){
  $("#service_module_1").click(function() {
    if ($("#service_module_1")[0].checked == true) {
      $("#service_ammount").val(parseInt($("#service_ammount").val()) + 1000)
    } else {
      $("#service_ammount").val(parseInt($("#service_ammount").val()) - 1000)
    }
  });
  $("#service_module_2").click(function() {
    if ($("#service_module_2")[0].checked == true) {
      $("#service_ammount").val(parseInt($("#service_ammount").val()) + 1000)
    } else {
      $("#service_ammount").val(parseInt($("#service_ammount").val()) - 1000)
    }
  });
  $("#service_module_3").click(function() {
    if ($("#service_module_3")[0].checked == true) {
      $("#service_ammount").val(parseInt($("#service_ammount").val()) + 500)
    } else {
      $("#service_ammount").val(parseInt($("#service_ammount").val()) - 500)
    }
  });
  $("#service_module_4").click(function() {
    if ($("#service_module_4")[0].checked == true) {
      $("#service_ammount").val(parseInt($("#service_ammount").val()) + 2000)
    } else {
      $("#service_ammount").val(parseInt($("#service_ammount").val()) - 2000)
    }
  });
  $("#service_module_5").click(function() {
    if ($("#service_module_5")[0].checked == true) {
      $("#service_ammount").val(parseInt($("#service_ammount").val()) + 3200)
    } else {
      $("#service_ammount").val(parseInt($("#service_ammount").val()) - 3200)
    }
  });
  $("#service_module_6").click(function() {
    if ($("#service_module_6")[0].checked == true) {
      $("#service_ammount").val(parseInt($("#service_ammount").val()) + 7200)
    } else {
      $("#service_ammount").val(parseInt($("#service_ammount").val()) - 7200)
    }
  });
}

// function showFormErrors() {
//   $("#new_service");
// }


$(window).on('resize', function(){
  resizeDiv();
});

var ready;
ready = function() {
  $(document).foundation();

  var wizard = $("#new_service div");
  // wizard.validate({
  //   errorPlacement: function errorPlacement(error, element) { element.before(error); }
  // });
  wizard.steps({
      headerTag: "h3",
      bodyTag: "section",
      transitionEffect: "none",
      titleTemplate: "#title#",
      stepsOrientation: "vertical",
      // onStepChanging: function (event, currentIndex, newIndex)
      // {
      //     wizard.validate().settings.ignore = ":disabled,:hidden";
      //     return wizard.valid();
      // },
      // onFinishing: function (event, currentIndex)
      // {
      //   wizard.validate().settings.ignore = ":disabled";
      //   return wizard.valid();
      // },
      onFinished: function (event, currentIndex)
      {
        wizard.closest("form").submit();
      },
      labels: { next: "Siguiente",
      previous: "Anterior",
      finish: "Enviar solicitud" }
  });

  if ($("#new_service").data("errored") == true) {
    wizard.steps("next");
    wizard.steps("next");
    wizard.steps("next");
    wizard.steps("next");
    wizard.steps("next");
    wizard.steps("next");
  }
  init();
};

$(document).on('page:update', ready);
