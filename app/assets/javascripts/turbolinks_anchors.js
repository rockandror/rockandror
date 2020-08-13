(function(){
  "use strict";

  document.addEventListener("turbolinks:click", function(event) {
    var link, linkUrl, pageUrl;

    link = event.target;
    linkUrl = link.href.replace(link.hash, '');
    pageUrl = location.href.replace(location.hash, '');

    if (link.hash !== '' && linkUrl === pageUrl) {
      event.preventDefault();
      event.stopPropagation();
      return $('html, body').animate({
        scrollTop: $(link.hash).offset().top
      }, 800, function() {
        return window.location.hash = link.hash;
      });
    }
  });
}).call(this);
