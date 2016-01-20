'use strict';
/**
 * @ngdoc function
 * @name twebTe2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the twebTe2App
 */
angular.module('twebTe2App')
  .run(['$state', function ($state) {
    $state.transitionTo('home');
  }]);
