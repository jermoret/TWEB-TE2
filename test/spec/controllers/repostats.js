'use strict';

describe('Controller: RepostatsCtrl', function () {

  // load the controller's module
  beforeEach(module('twebTe2App'));

  var RepostatsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RepostatsCtrl = $controller('RepostatsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RepostatsCtrl.awesomeThings.length).toBe(3);
  });
});
