'use strict';

define(function (require) {
    require('angular').module('TestJamgleWebapp.filters', []).
        filter('interpolate', require('filter/version_filter'));
        // Add additional filters
        // .filter('filter2', ...
});
