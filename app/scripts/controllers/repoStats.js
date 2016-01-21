'use strict';

/**
 * @ngdoc function
 * @name twebTe2App.controller:RepostatsCtrl
 * @description
 * # RepostatsCtrl
 * Controller of the twebTe2App
 */
angular.module('twebTe2App')
  .controller('RepoStatsCtrl', function ($scope, $stateParams, ApiGithub, $http) {
    $scope.repoName = $stateParams.repoName;
    $scope.ownerName = $stateParams.userLogin;

    $scope.repartition = {labels: [], data: []}

    $scope.addDel = {
      labels: $scope.repartition.labels,
      series: ["Additions", "Delections"],
      data: [[],[]]
    }

    $http.get(ApiGithub.url + "/repos/" + $scope.ownerName + "/" + $scope.repoName + "/stats/contributors")
      .then(function (response) {
        response.data.forEach(function (contributor, idx, arr) {
          $scope.repartition.data.push(contributor.total);
          $scope.repartition.labels.push(contributor.author.login);
          $scope.addDel.data[0].push(0);
          $scope.addDel.data[1].push(0);
          contributor.weeks.forEach(function(week, idxW, arr) {
            if(week.c === 0) return;
            $scope.addDel.data[0][idx] += week.a;
            $scope.addDel.data[1][idx] += week.d;
          });
        });
      }, function (response) {
        console.log("error");
      });

    $scope.weekAct = {
      labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      series: ["Nbr of commit per day"],
      data: [[0, 0, 0, 0, 0, 0, 0]]
    }

    $http.get(ApiGithub.url + "/repos/" + $scope.ownerName + "/" + $scope.repoName + "/stats/commit_activity")
      .then(function (response) {
        response.data.forEach(function (week, idx, arr) {
          if (week.total === 0) return;
          week.days.forEach(function (day, idx, arr) {
            $scope.weekAct.data[0][idx] += day;
          });
        });
      }, function (response) {
        console.log("error");
      });

    $scope.hourAct = {
      labels: [],
      series: ["Nbr of commit per hour"],
      data: [[]]
    }

    var i;
    for (i = 0; i < 24; i++) {
      if (i < 10)
        $scope.hourAct.labels.push("0" + i + ":00");
      else
        $scope.hourAct.labels.push(i + ":00");
      $scope.hourAct.data[0].push(0);
    }

    $http.get(ApiGithub.url + "/repos/" + $scope.ownerName + "/" + $scope.repoName + "/stats/punch_card")
      .then(function (response) {
        response.data.forEach(function (hour, idx, arr) {
          if (hour[2] === 0) return;
          $scope.hourAct.data[0][hour[1]] += hour[2];
        });
      }, function (response) {
        console.log("error");
      });



    /*$http.get(ApiGithub.url + "/repos/" + $scope.ownerName + "/" + $scope.repoName + "/stats/commit_activity")
      .then(function (response) {
        response.data.forEach(function (week, idx, arr) {
          if (week.total === 0) return;
          week.days.forEach(function (day, idx, arr) {
            $scope.weekAct.data[0][idx] += day;
          });
        });
      }, function (response) {
        console.log("error");
      });*/

  });
