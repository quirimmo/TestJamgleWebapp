module.exports = function (config) {
    config.set({
        basePath: '..',
        frameworks: ['ng-scenario', 'jasmine'],
        files: [
            'scripts/components/requirejs/require.js',
            'scripts/components/angular/angular.min.js',
            'scripts/components/angular-route/angular-route.min.js',
            'scripts/components/angular-mocks/angular-mocks.js',
            'scripts/*.js',
            'scripts/controller/*.js',
            'scripts/directive/*.js',
            'scripts/filter/*.js',
            'scripts/service/*.js',
            'test/unit/**/*.js'
        ],
        exclude: [
            'index.html'
        ],
        port: 8080,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false
    });
};