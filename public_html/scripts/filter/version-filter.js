'use strict';

define(function () {
    return ['VersionService', function(versionService) {
        return function(text) {
            return String(text).replace(/\%VERSION\%/mg, " - n. " + versionService.version);
        };
    }];
});

