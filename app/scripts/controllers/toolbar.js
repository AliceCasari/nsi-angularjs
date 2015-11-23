'use strict';

/**
 * @ngdoc function
 * @name angularnewcourseApp.controller:ToolbarCtrl
 * @description
 * # ToolbarCtrl
 * Controller of the angularnewcourseApp
 */
angular.module('angularnewcourseApp')
  .controller('ToolbarCtrl', ['$http', '$location', 'baseUrl', 'UtenteFactory', function($http, $location, baseUrl, UtenteFactory) {
    var vm = this;
    vm.utente = UtenteFactory.getUtente;
    vm.logout = logout;

    function logout() {
      $http.post(baseUrl + '/api/Account/Logout')
        .then(
        function(response) {
          UtenteFactory.setUtente({});
          $location.path('/login');
        },
        function(error) {
          alert('logout ko');
        }
      );
    }
}]);
