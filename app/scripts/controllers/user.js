'use strict';

/**
 * @ngdoc function
 * @name twebTe2App.controller:SalutCtrl
 * @description
 * # SalutCtrl
 * Controller of the twebTe2App
 */
angular.module('twebTe2App')
  .controller('UserCtrl', function ($scope, $http, ApiGithub, $state, $stateParams, $uibModal) {

    $scope.searchUser = function () {
      $http.get(ApiGithub.url + "/search/users?q=" + $scope.userName)
        .then(function (response) {
          $scope.items = [];
          if (response.data.items.length === 0) {
            var modalInstance = $uibModal.open({ // Error modal
              templateUrl: 'views/modal.html',
              controller: 'ModalCtrl',
              backdrop: true,
              keyboard: true,
              backdropClick: true,
              size: 'lg'
            });
          }
          else if (response.data.items.length === 1) {
            $state.go('statsUser', {userLogin: response.data.items[0].login});
          }
          else {
            $scope.items = response.data.items;
          }
        }, function (response) {
          console.log("erroe");
        });
    }

    $scope.selectUser = function (item) {
      $state.go('statsUser', {userLogin: item.login});
    }
  })
  .directive('ngEnter', function () {
    return function (scope, element, attrs) {
      element.bind("keydown keypress", function (event) {
        if (event.which === 13) {
          scope.$apply(function () {
            scope.$eval(attrs.ngEnter);
          });
          event.preventDefault();
        }
      });
    };
  });
