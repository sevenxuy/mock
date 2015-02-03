require(['mock'], function(mock) {

  'use strict';

  mock.init();

  document.addEventListener('touchmove', function(e) {
    e.preventDefault();
  }, false);

});
