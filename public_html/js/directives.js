'use strict';

define(function (require) {
    require('angular').module('TestJamgleWebapp.directives', []).
        directive('appVersion', require('directive/version_directive'));
        // Add additional directives
        // .directive('filter2', ...

});