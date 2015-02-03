'use strict';


require.config({
    paths: {
        async: "components/requirejs-plugins/src/async",
        angular: 'components/angular/angular',
        angularRoute: 'components/angular-route/angular-route',
        angularMocks: 'components/angular-mocks/angular-mocks',
        jquery: 'components/jquery/dist/jquery',
        jqueryMobile: 'components/jquery-mobile-bower/js/jquery.mobile-1.4.5.min',
        text: 'components/requirejs-text/text',
        mainStarter: 'main-starter'
    },
    shim: {
        'angular': {
            'exports': 'angular'
        },
        'angularRoute': [
            'angular'
        ],
        'angularMocks': {
            deps: [
                'angular'
            ],
            'exports': 'angular.mock'
        },
        'jqueryMobile':[
            'jquery'
        ]
    },
    priority: [
        "angular"
    ]
});


window.name = "NG_DEFER_BOOTSTRAP!";

//first required list in common with jamgle mobile and jamgle webapp
var FIRST_REQUIRE_LIST= [
    'angular',
    'angularRoute',
    'jquery',
    'main-starter'
];



require(FIRST_REQUIRE_LIST, 
    
    //function called once you require the first files list, with the files in common between mobile and web
    function () {
        
        
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