'use strict';

/**
 * @ngdoc function
 * @name angularnewcourseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularnewcourseApp
 */
angular.module('angularnewcourseApp')
  .controller('MainCtrl', ['$http', 'baseUrl', '$location', 'UtenteFactory', function ($http, baseUrl, $location, UtenteFactory) {
    var vm = this;
    vm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    vm.stanze = [];

    activate();

    function activate() {
      $http.get(baseUrl + '/api/Account/UtenteId')
        .then(
          function(data) {
            $http.get(baseUrl + '/api/Utente/' + data.data)
              .then(
                function(data) {
                  UtenteFactory.setUtente(data.data);
                },
                function(error) {
                  $location.path('/login');
                }
              );
          },
          function(error) {
            $location.path('/login');
          }
        );
    }
  }]);
