(function(){
  "use strict";

  document.addEventListener("turbolinks:click", function(event) {
    var anchorElement = event.target
    var isSamePageAnchor = (
      anchorElement.hash &&
      anchorElement.origin === window.location.origin &&
      anchorElement.pathname === window.location.pathname
    )

    if (isSamePageAnchor) {
      event.preventDefault();
      event.stopPropagation();
      Turbolinks.controller.pushHistoryWithLocationAndRestorationIdentifier(
        event.data.url,
        Turbolinks.uuid()
      )

      $('html, body').animate({
        scrollTop: $(anchorElement.hash).offset().top
      }, 800, function() {
        window.location.hash = anchorElement.hash;
      });
    }
  });
}).call(this);
