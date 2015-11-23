'use strict';

/**
 * @ngdoc function
 * @name angularnewcourseApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the angularnewcourseApp
 */
angular.module('angularnewcourseApp')
  .controller('LoginCtrl', ['$http', '$location', 'baseUrl', 'UtenteFactory', function ($http, $location, baseUrl, UtenteFactory) {
    var vm = this;
    vm.username = 'admin';
    vm.password = 'Password1!';
    vm.submit = login;

    function login() {
      $http.post(baseUrl + '/api/Account/Login',
        {
          UserName: vm.username,
          Password: vm.password,
          IsPersistent: true
        }
      )
      .then(
        function(response) {
          $location.path('/');
        },
        function(error) {
          alert('login ko');
        }
      );
    }
  }]);
