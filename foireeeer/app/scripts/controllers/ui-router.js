'use strict';
/**
 * @ngdoc function
 * @name twebTe2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the twebTe2App
 */
angular.module('twebTe2App')
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
      templateUrl: '../../views/main.html',
      url: '/'
    });
  });
