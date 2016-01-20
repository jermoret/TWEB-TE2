'use strict';

describe('Controller: UserstatsCtrl', function () {

  // load the controller's module
  beforeEach(module('twebTe2App'));

  var UserstatsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserstatsCtrl = $controller('UserstatsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UserstatsCtrl.awesomeThings.length).toBe(3);
  });
});
