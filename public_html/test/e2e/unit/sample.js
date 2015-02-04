describe('Unit: TestController', function () {
    
//    browser().navigateTo("http://www.google.it");
    beforeEach(module('jamgleApp'));
    
    it('should create run per dio', inject(function($controller) {
        var scope = {};
        var ctrl = $controller('MainTestCtrl', {$scope:scope});
        expect(scope.test).toBe(3);
    }));

});