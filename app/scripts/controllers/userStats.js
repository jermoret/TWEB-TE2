'use strict';

/**
 * @ngdoc function
 * @name twebTe2App.controller:UserstatsCtrl
 * @description
 * # UserstatsCtrl
 * Controller of the twebTe2App
 */
angular.module('twebTe2App')
  .controller('UserStatsCtrl', function ($scope, $stateParams, ApiGithub, $http) {
    $http.get(ApiGithub.url + "/users/" + $stateParams.userLogin)
      .then(function(response) {
        $scope.avatarURL = response.data.avatar_url;
        $scope.fullName = response.data.name;
        $scope.login = response.data.login;
        $scope.email = response.data.email;
        $scope.location = response.data.location;
        $scope.company = response.data.company;
        var date = new Date(response.data.created_at);
        var options = {year: "numeric", month: "long", day: "numeric"};
        $scope.createdAt = "Created " + date.toLocaleDateString("en-US", options);
        $scope.followers = response.data.followers;
        $scope.following = response.data.following;
      }, function(response) {
        console.log("erroe");
      });
  });
