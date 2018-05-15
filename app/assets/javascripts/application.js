//= require jquery
//= require jquery_ujs
//= require jquery.steps
//= require analytics
//= require bootstrap-sprockets
//= require turbolinks
//= require app
//= require navbar
//= require facebook
//= require home
//= require consul_budget
//= require animate
//= require scrollto
//= require cookies_eu
//= require nprogress
//= require nprogress-turbolinks
//= require nprogress-ajax
//= require 'greensock/TweenMax'
//= require 'greensock/TimelineMax'
//= require 'greensock/jquery.gsap.js'

var initialize_modules = function() {
  App.Navbar.initialize();
  App.Home.initialize();
  App.ConsulBudget.initialize();
}

$(function(){
  $(document).ready(initialize_modules);
  $(document).on('page:load', initialize_modules);
  $(document).on('ajax:complete', initialize_modules);
});
