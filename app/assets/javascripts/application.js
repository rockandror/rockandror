//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require owl.carousel
//= require foundation
//= require cookies_eu
//= require nprogress
//= require nprogress-turbolinks
//= require nprogress-ajax
//= require 'greensock/TweenMax'
//= require 'greensock/TimelineMax'
//= require 'greensock/jquery.gsap.js'
//= require app
//= require animate
//= require turbolinks

var ready;
ready = function() {
  $(document).foundation();

  App.Animate.initialize();
};

$(document).on('page:update', ready);
