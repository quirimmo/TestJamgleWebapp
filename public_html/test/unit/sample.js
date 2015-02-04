describe('Unit: TestController', function () {


    beforeEach(module('jamgleApp'));
    
    it('should create run per dio', inject(function($controller) {
        var scope = {};
        var ctrl = $controller('MainTestCtrl', {$scope:scope});
        expect(scope.test).toBe(3);
    }));

    
    it('contains a passing spec', function () {
        expect(true).toBe(true);
    });
    it('contains another passing spec', function () {
        expect(false).not.toBe(true);
    });
    
});