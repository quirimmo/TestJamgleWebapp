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
        less: 'components/less/dist/less.min',
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
    'less',
    'angular',
    'angularRoute',
    'jquery',
    'main-starter',
    "filters",
    "directives",
    'controllers',
    'services',
    'routes'
];


var jamgleApp;

require(FIRST_REQUIRE_LIST, 
    
    //function called once you require the first files list, with the files in common between mobile and web
    function () {
        
        //bootstrap TestJamgleWebapp angular application
        jamgleApp= angular.bootstrap(document, ['TestJamgleWebapp']);
        
        console.log("Bootstrapped TestJamgleWebapp");

        //remove jquerymobile page events avoiding conflicts with Angular Route
        $(document).bind("mobileinit", function () {
            $.mobile.ajaxEnabled = false;
            $.mobile.linkBindingEnabled = false;
            $.mobile.hashListeningEnabled = false;
            $.mobile.pushStateEnabled = false;
        });
        
        
        /**
         * Detect if is mobile device
         */
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            //here require the jquery mobile framework
            console.log("Mobile Device");
        }
        else{
            console.log("Web Device");
        }
        

        //if is mobile, require also jqueryMobile
        require(['jqueryMobile'], function(){
            //here you loaded the jquery mobile framework
            if ($.mobile) {
                console.log("Jquery mobile is working");
            } else {
                console.log("Jquery mobile is not working");
            } 
        });
        
        
});