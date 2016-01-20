'use strict';

describe('Controller: SalutCtrl', function () {

  // load the controller's module
  beforeEach(module('twebTe2App'));

  var SalutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SalutCtrl = $controller('SalutCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SalutCtrl.awesomeThings.length).toBe(3);
  });
});
