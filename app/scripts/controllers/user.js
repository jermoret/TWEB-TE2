'use strict';

/**
 * @ngdoc function
 * @name twebTe2App.controller:SalutCtrl
 * @description
 * # SalutCtrl
 * Controller of the twebTe2App
 */
angular.module('twebTe2App')
  .controller('UserCtrl', function ($scope, $http, ApiGithub, $state, $stateParams) {

    $scope.searchUser = function() {
      $http.get(ApiGithub.url + "/search/users?q=" + $scope.userName)
        .then(function(response) {
          $scope.items = response.data.items;
        }, function(response) {
          console.log("erroe");
        });
    }

    $scope.selectUser = function(item) {
      $state.go('statsUser', {userLogin:item.login});
    }
  });
