'use strict';


//define the angular TestJamgleWebapp application
define(['angular'], function() {
    
    jamgleApp= angular.module('TestJamgleWebapp',
        [
            'ngRoute',
            'TestJamgleWebapp.filters',
            'TestJamgleWebapp.services',
            'TestJamgleWebapp.directives',
            'TestJamgleWebapp.controllers'
        ]
    ); 
    return jamgleApp;
    
});

