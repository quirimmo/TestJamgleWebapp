'use strict';

require.config({
    paths: {
        async: "../scripts/components/requirejs-plugins/src/async",
        angular: '../scripts/components/angular/angular',
        angularRoute: '../scripts/components/angular-route/angular-route',
        angularMocks: '../scripts/components/angular-mocks/angular-mocks',
        jquery: '../scripts/components/jquery/dist/jquery',
        bootstrap: '../scripts/components/bootstrap/dist/js/bootstrap',
        text: '../scripts/components/requirejs-text/text'
    },
    shim: {
        "bootstrap": {
            deps: ["jquery"]
        },
        'angular': {'exports': 'angular'},
        'angularRoute': ['angular'],
        'angularMocks': {
            deps: ['angular'],
            'exports': 'angular.mock'
        }
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
    'bootstrap',
    'app',
    'controllers',
    'services',
    'directives',
    'filters',
    'routes'
], function () {
    angular.bootstrap(document, ['myApp']);
});

