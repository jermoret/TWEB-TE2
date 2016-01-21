'use strict';

/**
 * @ngdoc function
 * @name twebTe2App.controller:UserstatsCtrl
 * @description
 * # UserstatsCtrl
 * Controller of the twebTe2App
 */
angular.module('twebTe2App')
  .controller('UserStatsCtrl', function ($scope, $stateParams, ApiGithub, $http, $state) {

    $scope.userLogin = $stateParams.userLogin;

    $http.get(ApiGithub.url + "/users/" + $stateParams.userLogin)
      .then(function (response) {
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

        $http.get(ApiGithub.url + "/users/" + $stateParams.userLogin + "/repos")
          .then(function (response) {
            $scope.repos = response.data;
            $scope.findTheMostCommited();
          }, function (response) {

          });
      }, function (response) {
        console.log("error");
      });

    $scope.mostCommitedRepo = [];
    var mostCommitedTmp = [{name:'none', commit:0}, {name:'none', commit:0}, {name:'none', commit:0}];
    $scope.findTheMostCommited = function() {

      var nbrCommit;
      $scope.repos.forEach(function(repo, idx, arr) {
        $http.get(ApiGithub.url + "/repos/" + $stateParams.userLogin + "/" + repo.name + "/stats/contributors")
          .then(function (response) {
            if(response.data[0] === undefined) return;
            nbrCommit = response.data[0].total;
            if(nbrCommit > mostCommitedTmp[0].commit) {
              mostCommitedTmp[1] = mostCommitedTmp[0];
              mostCommitedTmp[0] = {name: repo.name, commit: nbrCommit};
            } else if(nbrCommit > mostCommitedTmp[1].commit) {
              mostCommitedTmp[2] = mostCommitedTmp[1];
              mostCommitedTmp[1] = {name: repo.name, commit: nbrCommit};
            } else if(nbrCommit > mostCommitedTmp[2].commit) {
              mostCommitedTmp[2] = {name: repo.name, commit: nbrCommit};
            }

            if(idx === arr.length - 1) {
              $scope.mostCommitedRepo = mostCommitedTmp;
              $scope.animatePodium();
            }
          }, function (response) {
            console.log("error");
          });
      });
    }

    $scope.animatePodium = function() {
      jQuery('.bronze .podium').animate({
        "height": "62px"
      }, 1500);
      jQuery('.gold .podium').animate({
        "height": "165px"
      }, 1500);
      jQuery('.silver .podium').animate({
        "height": "106px"
      }, 1500);
      jQuery('.competition-container .name').delay(1000).animate({
        "opacity": "1"
      }, 500);
    }

    $scope.statsOfRepo = function(repo) {
      $state.go('statsRepo', {userLogin:$stateParams.userLogin, repoName:repo.name});
    }
  });
