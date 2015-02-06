module.exports = function (config) {
    config.set({
        basePath: './',
        files: [
            '../scripts/components/requirejs/require.js',
            '../scripts/components/angular/angular.js',
            '../scripts/components/angular-route/angular-route.js',
            '../scripts/components/angular-mocks/angular-mocks.js',
            '../scripts/main-starter.js',
            '../scripts/*.js',
            '../scripts/bootloader.js',
            '../scripts/controller/*.js',
            '../scripts/directive/*.js',
            '../scripts/filter/*.js',
            '../scripts/service/*.js',
            '**/**/*.js'
        ],
        autoWatch: true,
        frameworks: ['jasmine'],
        browsers: ['Chrome'],
        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],
        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};