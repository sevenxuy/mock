require.config({
  baseUrl: '/js/app/',
  paths: {
    'jquery': '../lib/jquery-1.11.2',
    'jquery.ui.widget': '../lib/jquery.ui.widget-1.10.4',
    'jquery.mobile.events': '../lib/jquery.mobile-events',
    'iscroll': '../lib/iscroll-lite',
    'underscore': '../lib/underscore'
  },
  shim: {
    'mock': ['jquery', 'jquery.ui.widget', 'jquery.mobile.events', 'iscroll', 'underscore'],
    'jquery.ui.widget': ['jquery'],
    'jquery.mobile.events': ['jquery'],
    'underscore': {
      exports: '_'
    },
  },
  deps: ['bootstrap'],
  waitSeconds: 40
});
