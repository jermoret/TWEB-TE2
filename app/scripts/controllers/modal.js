'use strict';

/**
 * @ngdoc function
 * @name twebTe2App.controller:ModalCtrl
 * @description
 * # ModalCtrl
 * Controller of the twebTe2App
 */
angular.module('twebTe2App')
  .controller('ModalCtrl', function ($scope, $uibModalInstance) {
    $scope.close = function () {
      $uibModalInstance.close();
    };
  });
