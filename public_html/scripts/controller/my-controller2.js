'use strict';

define(['main-starter'], function(mainStarter){
    jamgleApp.controller('MyController2', [ '$scope', 'VersionService', function ($scope, versionService) {    
            
        $scope.message = "Message from MyController2 " + versionService.version; 
        
    }]);
});

