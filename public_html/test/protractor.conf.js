exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'e2e/unit/*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost/TestJamgleWebapp/public_html/',
  
    seleniumAddress: 'http://localhost:4444/wd/hub',
  
  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
