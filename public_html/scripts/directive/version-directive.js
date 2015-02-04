'use strict';

define(function () {
    return ['VersionService', function(VersionService) {
            
            var obj= {
                restrict: 'E',
                scope: {
                },
                replace: true,
                controller: function ($rootScope, $scope, $element) {

                    $scope.version = VersionService.version;
                    $scope.test= "TESTTTT";
                    
                    $scope.init = function () {
                        console.log("INIT VERSION DIRECTIVE CONTROLLER");
                    };

                    $scope.init();

                },
                templateUrl: 'views/partials/app-version.html'
            };
            
            return obj;
    }];
});
