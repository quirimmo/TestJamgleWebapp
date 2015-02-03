'use strict';


define(['angular'], function() {
    return angular.module('TestJamgleWebapp', [
        'ngRoute',
        'TestJamgleWebapp.filters',
        'TestJamgleWebapp.services',
        'TestJamgleWebapp.directives',
        'TestJamgleWebapp.controllers'
    ]);
});
