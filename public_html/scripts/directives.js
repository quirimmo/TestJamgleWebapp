'use strict';

define(function (require) {
    require('angular').module('TestJamgleWebapp.directives', ['TestJamgleWebapp.services']).
        directive('appVersion', require('directive/version-directive'));
});