'use strict';

define(function (require) {
    require('angular').module('TestJamgleWebapp.controllers', ['TestJamgleWebapp.services']).
        controller('MyController1', require('controller/my-controller1')).
        controller('MyController2', require('controller/my-controller2')).
        controller('MainTestCtrl', require('controller/main-test-ctrl'));
});