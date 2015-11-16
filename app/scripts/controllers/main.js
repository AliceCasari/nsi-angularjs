'use strict';

/**
 * @ngdoc function
 * @name angularnewcourseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularnewcourseApp
 */
angular.module('angularnewcourseApp')
  .controller('MainCtrl', ['$http', function ($http) {
    var vm = this;
    vm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    vm.stanze = [];

    activate();

    function activate() {
      $http.get('https://nsi-prenota.azurewebsites.net/api/Stanza', {withCredentials: true})
        .then(function(data) {
          vm.stanze = data.data;
        });
    }
  }]);
