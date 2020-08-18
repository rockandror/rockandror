//= require jquery
//= require jquery_ujs
//= require foundation
//= require nprogress
//= require nprogress-turbolinks
//= require nprogress-ajax
//= require app
//= require nprogressapp
//= require turbolinks_anchors
//= require turbolinks
//= require cookies_eu

var initialize_modules;
initialize_modules = function() {
  $(document).foundation();
};

$(document).on('turbolinks:load', initialize_modules);
