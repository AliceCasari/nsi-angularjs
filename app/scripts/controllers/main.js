'use strict';

/**
 * @ngdoc function
 * @name angularnewcourseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularnewcourseApp
 */
angular.module('angularnewcourseApp')
  .controller('MainCtrl', function () {
    var vm = this;
    vm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
