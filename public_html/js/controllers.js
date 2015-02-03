'use strict';

define(function (require) {
    require('angular').module('TestJamgleWebapp.controllers', ['TestJamgleWebapp.services']).
        controller('MyController1', require('controller/my_controller1')).
        controller('MyController2', require('controller/my_controller2'));
        // Add additional controllers here
});
