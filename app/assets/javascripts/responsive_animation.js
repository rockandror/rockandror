
function setIntroAnimation() {
    
    var
    link_url_active,
    topBar = $('.top-bar'),
    introSection = $('.bg-background'),
    h1 = $(".video-container-show h1"),
    lead = $(".intro lead"),
    topcontact = $(".top-contact"),
    scroll = $("#btn_scroll"),
    plus = $("#btn_plus"),
    close = $("#btn_close"),
    back = $("#btn_back"),
    home = $("#btn_home"),
    works = $("#btn_works"),
    boatjump = $("#btn_boatjump"),
    webdings = $("#btn_webdings"),
    eatbooking = $("#btn_eatbooking"),
    oasiscatamaran = $("#btn_oasiscatamaran"),
    team = $("#btn_team");
    phone = $("#btn_tel");
    email = $("#btn_email");
    container = $("#btn_container");
    containerSubMenu = $("#container_submenu");

  
    $(window).bind("resize", function(){
      if ($(window).width() >= 768) {
        screenOrientation = ($(window).width() > $(window).height())? 90 : 0;
        if(screenOrientation==0){
          console.log("port");
          TweenMax.to(topcontact, 0.5, {top: "0%",opacity:1, ease:Cubic.easeIn})
          TweenMax.to(plus, 0.5, {top: "88%",opacity:1  , ease:Cubic.easeIn})
        }else{
          console.log("land");
          TweenMax.to(topcontact, 0.5, {top: "-50%",opacity:1, ease:Cubic.easeIn})
          TweenMax.to(plus, 0.5, {top: "100%",opacity:1  , ease:Cubic.easeIn})
        }
      }
    });
 
    if (window.matchMedia('(max-width: 768px)').matches) {
      $('.top-bar').hide();
      console.log("smartphone");

    tl_submenu = new TimelineMax();
    tl_introLead = new TimelineMax();
    tl_introSection = new TimelineMax();
    tl_topcontact = new TimelineMax();
    tl_scroll = new TimelineMax();
    tl_plus = new TimelineMax();
    tl_plus_start = new TimelineMax();
    tl_close = new TimelineMax();
    tl_back = new TimelineMax();
    tl_home = new TimelineMax();
    tl_works = new TimelineMax();
    tl_team = new TimelineMax({onReverseComplete:reset});
    tl_phone = new TimelineMax();
    tl_email = new TimelineMax();
    tlContainer = new TimelineMax();

    tl_introLead.pause();
    tl_introSection.pause();
    tl_topcontact.pause();
    tl_scroll.pause();
    tl_plus_start.pause();
    tl_plus.pause();
    tl_close.pause();
    tl_back.pause();
    tl_submenu.pause();
    tl_home.pause();
    tl_works.pause();
    tl_team.pause();
    tl_phone.pause();
    tl_email.pause();
    tlContainer.pause();
      
    tl_topcontact
      .to(topcontact, 0.7, {top: "0%",opacity:1, ease: Power4.easeInOut,delay:1})
      .addPause();
    // tl_scroll
    //   .to(scroll, 0.5, {top: "88%",opacity:1  , ease: Power4.easeInOut,delay:2, onComplete: bounce_effect})
    //   .addPause();
    tl_plus_start
      .to(plus, 0.5, {top: "88%",opacity:1  , ease: Power4.easeInOut,delay:1})
      .addPause();
    tl_plus
      .to(plus, 0.5, {top: "100%",opacity:0, ease: Power4.easeInOut})
      .addPause();
    tl_close
      .to(close, 0.5, {top: "88%", opacity:1,ease: Power4.easeInOut, onComplete: show_menu})
      .addPause();
    tl_back
      .to(back, 0.5, {top: "88%", opacity:1,ease: Circ.easeInOut})
      .to(back, 1, {left: "-80%", opacity:1,ease: Circ.easeInOut})
      .to(back, 1, {backgroundColor: "transparent",border:"#00b0ea", ease: Circ.easeInOut})
      .addPause();
    tl_home
      .to(home, 0.5, {top: "5%", opacity:1, ease: Power4.easeInOut})
      .addPause();
    tl_works
      .to(works, 0.5, {top: "25%", opacity:1, ease: Power4.easeInOut})
      .addPause();
    tl_team
      .to(team, 0.5, {top: "45%", opacity:1, ease: Power4.easeInOut})
      .addPause();
    tl_phone
      .to(phone, 0.5, {top: "65%", right: "-55%", opacity:1, ease: Power4.easeInOut})
      .addPause();
    tl_email
      .to(email, 0.5, {top: "65%", left: "-55%", opacity:1, ease: Power4.easeInOut})
      .addPause();
    tlContainer
      .to(container, 0.5, {visibility: "visible", opacity:1, ease: Power4.easeInOut})
      .to(container, 0.5, {backgroundColor: "#000", opacity:.8, ease: Power4.easeInOut})
      .addPause();
    tl_submenu
      .to(containerSubMenu, 0, {visibility: "visible", opacity:1, ease: Power4.easeInOut})
      .to(containerSubMenu, 1, {bottom: "15%", opacity:1, ease: Power4.easeInOut, onComplete: load_owlCarousel})
      .addPause();

      //$('.top-bar').hide();
      // $(scroll).on('click',function(){
      //   switchButton();
      // });

      $(plus).on('click',function(){
        switchButton();
      });

      $(close).on('click',function(){
        close_menu();  
      });

      $(back).on('click',function(){
       TweenMax.to(back, 0.6, { opacity:0, ease: Power4.easeInOut});
       tl_back.pause();
        close_submenu();
      });

      $(works).on('click',function(){
        open_submenu();
      });

      $(home).on('click',function(link_url_active){
        link_url_active = "/";
        close_submenu(link_url_active);
      });
      
      $(boatjump).on('click',function(){
        link_url_active = "/boatjump";
        close_submenu(link_url_active);
      });
      $(webdings).on('click',function(){
        link_url_active = "/webdings";
        close_submenu(link_url_active);
      });
      $(eatbooking).on('click',function(){
        link_url_active = "/eatbooking";
        close_submenu(link_url_active);
      });
      $(oasiscatamaran).on('click',function(){
        link_url_active = "/oasiscatamaran";
        close_submenu(link_url_active);
      });  
      function bounce_effect(){
        //tl_scroll.to(scroll, 1, {y:"60", rotation: -90,  ease:Bounce.easeInOut,repeat:-1, yoyo:true})
      }
      // function firstSwitchButton(){
      //   tl_scroll.reverse();
      //   tl_plus_start.play();
      // }  
      function switchButton(){
        tl_plus.play();
        tl_close.play();
      }
      function show_menu(){
        tl_introSection.play();
        tl_topcontact.reverse();
        tlContainer.play();
        tl_home.play();
        tl_works.play();
        tl_team.play();
        tl_phone.play();
        tl_email.play();
      }
      function close_menu(){
        tl_home.reverse();
        tl_works.reverse();
        tl_team.reverse();
        tl_phone.reverse();
        tl_email.reverse();
      }
      function open_submenu(){
        tl_submenu.play();
        tl_close.reverse();
        //tl_back.play();
      }
      function load_owlCarousel(){
      
        TweenLite.to($(".owl-carousel"), 0.5, {y:0, opacity:1, ease: Power4.easeInOut}); 

          $(".owl-carousel").owlCarousel({

          itemsCustom : false,
          itemsDesktop : [1199,4],
          itemsDesktopSmall : [980,3],
          itemsTablet: [768,2],
          itemsTabletSmall: false,
          itemsMobile : [479,1],
          singleItem : false,
          itemsScaleUp : false,
       
          // //Basic Speeds
          // slideSpeed : 200,
          // paginationSpeed : 800,
          // rewindSpeed : 1000,
      
          // // Navigation
          navigation : true,
          navigationText : ["prev","next"],
          rewindNav : true,
          // scrollPerPage : false,
       
          // //Pagination
          pagination : false
//          paginationNumbers: true,
       
          // // Responsive 
          // responsive: true,
          // responsiveRefreshRate : 200,
          // responsiveBaseWidth: window,
       
          // // CSS Styles
          // baseClass : "owl-carousel",
          // theme : "owl-theme",
       
          // //Lazy load
          // lazyLoad : false,
          // lazyFollow : true,
          // lazyEffect : "fade",
       
          // //Auto height
          // autoHeight : false,
       
          
          // //Mouse Events
          // dragBeforeAnimFinish : true,
          // mouseDrag : true,
          // touchDrag : true,
       
          // //Transitions
          // transitionStyle : false,
       
          // // Other
          // addClassActive : false,
       
          // //Callbacks
          // beforeUpdate : false,
          // afterUpdate : false,
          // beforeInit: false, 
          // afterInit: false, 
          // beforeMove: false, 
          // afterMove: false,
          // afterAction: false,
          // startDragging : false
        });

        tl_back.play();
      }
    

      function close_submenu(link_url_active){
        TweenLite.to($(".owl-carousel"), 0.5, {y: -200, opacity:0, ease: Power4.easeInOut});
        
        if(link_url_active){
          tl_submenu.reverse();
          close_menu();
          console.log("si"+link_url_active);
        }else{
          tl_submenu.reverse();
          tl_close.play(); 
          link_url_active=""; 
          console.log("no"+link_url_active);
        }
      }
      function reset(){
        tl_plus.reverse();
        tl_close.reverse();
        tlContainer.reverse();
        tl_introSection.reverse();
        tl_topcontact.play();
        if(link_url_active){
         location.replace(link_url_active);
        }
      }
      
      tl_topcontact.play();
      tl_plus_start.play();
      
    } else {
        console.log("Desktop");
        TweenMax.to(topBar, 1, { y:100, autoAlpha:1, ease:Cubic.easeIn,delay:3})
    }

    TweenMax.to(introSection, 2, {autoAlpha:1,delay:0.2,ease:Cubic.easeIn});
    //TweenMax.to(introSection, 60, {scale:3, ease:Cubic.easeIn});
    TweenMax.to(h1, 1, {autoAlpha:1, ease:Cubic.easeIn});
    TweenMax.to(lead, 1, {autoAlpha:1, ease:Cubic.easeIn,delay:1});
    
  }

  
function showPlusStart(){
  //tl_plus_start.play();
}