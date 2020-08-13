//= require jquery
//= require jquery_ujs
//= require foundation
//= require nprogress
//= require nprogress-turbolinks
//= require nprogress-ajax
//= require 'greensock/TweenMax'
//= require 'greensock/TimelineMax'
//= require 'greensock/jquery.gsap.js'
//= require app
//= require animate
//= require turbolinks_anchors
//= require turbolinks
//= require cookies_eu

var initialize_modules;
initialize_modules = function() {
  $(document).foundation();

  App.Animate.initialize();
};

$(document).on('turbolinks:load', initialize_modules);
