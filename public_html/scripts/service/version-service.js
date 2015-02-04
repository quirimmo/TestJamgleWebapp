'use strict';

define(function () {
    
    return ['$rootScope', function($rootScope) {
        
        var self= this;
        
        console.log($rootScope);
        self.version= '0.1';
        self.test= 'TEST!?!?!?!?!?!?';
        
        return self;
        
    }];

});