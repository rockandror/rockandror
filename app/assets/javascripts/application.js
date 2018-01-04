//= require jquery

//= require jquery_ujs

//= require bootstrap-sprockets
//= require turbolinks
//= require app
//= require home
//= require main
//= require animation
//= require cookies_eu
//= require nprogress
//= require nprogress-turbolinks
//= require nprogress-ajax
//= require 'greensock/TweenMax'
//= require 'greensock/TimelineMax'
//= require 'greensock/jquery.gsap.js'


var initialize_modules = function() {
  App.Home.initialize();
}

$(function(){
  $(document).ready(initialize_modules);
  $(document).on('page:load', initialize_modules);
  $(document).on('ajax:complete', initialize_modules);
});
