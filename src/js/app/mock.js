define(function(require, exports, module) {

  'use strict';

  require('mock.view.mockMainView');

  var $mockMainView = $('#mockMainView');
  var mock = {
    init: function() {
      $mockMainView.mockMainView();
    }
  };

  module.exports = mock;
});
