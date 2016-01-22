'use strict';

/**
 * @ngdoc overview
 * @name twebTe2App
 * @description
 * # twebTe2App
 *
 * Main module of the application.
 */
angular
  .module('twebTe2App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'chart.js',
    'ui.bootstrap'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/users');

    $stateProvider
      .state('searchUser', {
        templateUrl: 'views/user.html',
        url: '/users'
      })
      .state('statsUser', {
        templateUrl: 'views/userStats.html',
        url: '/users/:userLogin'
      })
      .state('statsRepo', {
        templateUrl: 'views/repoStats.html',
        url: '/users/:userLogin/repos/:repoName/stats',
      });
  })
  .run(['$http', function ($http) {
    $http.defaults.headers.common['Accept'] = 'application/vnd.github.v3+json';
    $http.defaults.headers.common['Authorization'] = 'Basic ' + 'amVybW9yZXQ6X01hJHQzclEjYjByZA==';
  }])
