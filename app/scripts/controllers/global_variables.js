'use strict';

/**
 * @ngdoc function
 * @name twebTe2App.controller:GlobalVariablesCtrl
 * @description
 * # GlobalVariablesCtrl
 * Controller of the twebTe2App
 */
angular.module('twebTe2App')
  .factory('ApiGithub', function() {
    return {
      url : 'https://api.github.com'
    };
  });
