'use strict';

require.config({
    paths: {
        async: "../scripts/components/requirejs-plugins/src/async",
        angular: '../scripts/components/angular/angular',
        angularRoute: '../scripts/components/angular-route/angular-route',
        angularMocks: '../scripts/components/angular-mocks/angular-mocks',
        jquery: '../scripts/components/jquery/dist/jquery',
        jqueryMobile: '../scripts/components/jquery-mobile-bower/js/jquery.mobile-1.4.5.min',
        text: '../scripts/components/requirejs-text/text'
    },
    shim: {
        'angular': {
            'exports': 'angular'
        },
        'angularRoute': ['angular'],
        'angularMocks': {
            deps: ['angular'],
            'exports': 'angular.mock'
        },
        'jqueryMobile':['jquery']
    },
    priority: [
        "angular"
    ]
});

window.name = "NG_DEFER_BOOTSTRAP!";


require([
    'angular',
    'angularRoute',
    'jquery',
    'app',
    'controllers',
    'services',
    'directives',
    'filters',
    'routes'
    
], function () {

    angular.bootstrap(document, ['TestJamgleWebapp']);
    
    
    $(document).bind("mobileinit", function () {
        $.mobile.ajaxEnabled = false;
        $.mobile.linkBindingEnabled = false;
        $.mobile.hashListeningEnabled = false;
        $.mobile.pushStateEnabled = false;
    });
    
    
    require(['jqueryMobile'], function(){
        if ($.mobile) {
            console.log("Jquery mobile is working");
        } else {
            console.log("Jquery mobile is not working");
        } 
    });
    
});



