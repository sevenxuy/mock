define(function(require, exports, module) {

  'use strict';

  $.widget('mock.view', {
    options: {},
    /* ------------------------------------------------------------------------------
     * Private methods
     * ------------------------------------------------------------------------------*/
    _initIScroll: function(opts) {
      opts = _.extend({
        bounceEasing: 'circular',
        bounceTime: 1200,
        preventDefaultException: {
          tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A|SPAN|I)$/
        }
      }, opts);
      this._destroyIScroll();
      var iScrollWrapperElem = this.element.find('div[id$="-scroller-wrapper"]').get(0);
      if (!this.options.useIScroll || !iScrollWrapperElem) return;
      this.IScroll = new IScroll(iScrollWrapperElem, opts);
      this._refreshIScroll();
    }
  });

  module.exports = $.mock.view;
});
