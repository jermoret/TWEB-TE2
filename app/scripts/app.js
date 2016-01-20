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
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        templateUrl: 'views/main.html',
        url: '/'
      })
      .state('searchUser', {
        templateUrl: 'views/user.html',
        url: '/users'
      })
      .state('statsUser', {
        templateUrl: 'views/userStats.html',
        url: '/users/:userLogin'
      })
      .state('repo', {
        templateUrl: 'views/repo.html',
        url: '/repo'
      });
  });
