define(function(require, exports, module) {

  'use strict';

  var _mockView = require('mock.view');

  $.widget('mock.mockMainView', _mockView, {
    options: {},
    _create: function() {
      this.render();
      this._initIScroll();
      this._bindEvents();
    },
    render: function() {
      var h = [];
      h.push('<div id="mockMainView-scroller-wrapper" class="msu-scroller-wrapper">');
      h.push('<div class="msu-scroller">');
      h.push('</div>');
      h.push('</div>');
      this.element.append(h.join(''));
    },
    _bindEvents: function() {
      this._on(this.element, {

      });
    }
  });

  module.exports = $.mock.mockMainView;

});
