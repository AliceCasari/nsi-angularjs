'use strict';

/**
 * @ngdoc function
 * @name angularnewcourseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularnewcourseApp
 */
angular.module('angularnewcourseApp')
  .controller('MainCtrl', ['$http', 'baseUrl', function ($http, baseUrl) {
    var vm = this;
    vm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    vm.stanze = [];

    activate();

    function activate() {
      $http.get(baseUrl + '/api/Stanza')
        .then(
          function(data) {
            vm.stanze = data.data;
          },
          function(error) {
            alert('login ko');
          }
        );
    }
  }]);
