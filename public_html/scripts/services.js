'use strict';

define(function(require) {
    require('angular').module('TestJamgleWebapp.services', []).
        service("VersionService", require('service/version-service'));
});
