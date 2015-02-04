'use strict';

define(['main-starter'], function(mainStarter){
    jamgleApp.controller('MainTestCtrl', function ($scope) {    
        
        console.log("MAIN TEST CTRL");
        
        $scope.test= 3;
        
        $scope.sayHello= function(){
            $scope.greeting= "CIAO QUIRI!";
        };
        
        
    });
});
