'use strict';

define(['main-starter'], function (mainStarter) {
    
    return jamgleApp.directive('appVersion', ['VersionService', function (VersionService) {
            
        var obj = {
            restrict: 'E',
            scope: {
            },
            replace: true,
            controller: function($scope) {
                
                $scope.version= VersionService.version;
                
                $scope.init = function() {
                    console.log("INIT VERSION DIRECTIVE CONTROLLER");
                };

                $scope.init();

            },
            templateUrl: 'views/partials/app-version.html'
        };

        obj.controller.$inject = ['$scope'];

        return obj;

    }]);

});


//define(function () {
//    return ['VersionService', function(versionService) {
//        return function(scope, elm, attrs) {
//            elm.text(versionService.version);
//        };
//    }];
//});