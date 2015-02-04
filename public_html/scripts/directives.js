'use strict';

define(function (require) {
    return require('angular').module('TestJamgleWebapp.directives', ['TestJamgleWebapp.services']).
        directive('appVersion', require('directive/version-directive'));
});