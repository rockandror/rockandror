//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require owl.carousel
//= require foundation
//= require main
//= require animation
//= require cookies_eu
//= require nprogress
//= require nprogress-turbolinks
//= require nprogress-ajax
//= require 'greensock/TweenMax'
//= require 'greensock/TimelineMax'
//= require 'greensock/jquery.gsap.js'
//= require turbolinks

$(window).on('resize', function(){
  resizeDiv();
});

var ready;
ready = function() {
  $(document).foundation();

  init();
};

$(document).on('page:update', ready);
