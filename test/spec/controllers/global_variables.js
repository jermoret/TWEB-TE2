'use strict';

describe('Controller: GlobalVariablesCtrl', function () {

  // load the controller's module
  beforeEach(module('twebTe2App'));

  var GlobalVariablesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GlobalVariablesCtrl = $controller('GlobalVariablesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GlobalVariablesCtrl.awesomeThings.length).toBe(3);
  });
});
