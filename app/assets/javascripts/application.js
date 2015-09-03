//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require turbolinks
//= require_tree .
$(window).load(function() {
    // start up after 2sec no matter what
    window.setTimeout(function(){
        $('body').removeClass("loading").addClass('loaded');
    }, 2000);
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})