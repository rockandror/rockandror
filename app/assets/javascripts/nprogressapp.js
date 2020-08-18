(function(){
  "use strict";

  App.NProgressapp = {
    start: function() {
      NProgress.start()
    },
    stop: function() {
      NProgress.done();
      NProgress.remove();
    }
  }

  $(document).on('turbolinks:click', App.NProgressapp.start)
  $(document).on('turbolinks:render', App.NProgressapp.stop);
}).call(this);
