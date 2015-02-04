'use strict';

define(['main-starter'], function (app) {
    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'views/partial1.html',
            controller: 'MyController1'});
        $routeProvider.when('/view2', {
            templateUrl: 'views/partial2.html',
            controller: 'MyController2'});
        $routeProvider.when('/test', {
            templateUrl: 'views/test.html',
            controller: 'MainTestCtrl'});
        $routeProvider.otherwise(
            {redirectTo: '/view1'});
    }]);
});
