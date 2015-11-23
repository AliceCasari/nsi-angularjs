'use strict';

/**
 * @ngdoc function
 * @name angularnewcourseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularnewcourseApp
 */
angular.module('angularnewcourseApp')
  .controller('StanzeCtrl', ['$http', 'baseUrl', function ($http, baseUrl) {
    var vm = this;
    vm.listaStanze = [];

    activate();

    function activate() {
      $http.get(baseUrl + '/api/Stanza')
        .then(
        function(data) {
          vm.listaStanze = data.data;
        },
        function(error) {
          alert('error');
        }
      );
    }
  }]);
