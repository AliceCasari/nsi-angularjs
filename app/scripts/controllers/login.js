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
          $http.get(baseUrl + '/api/Account/UtenteId')
            .then(
              function(data) {
                $http.get(baseUrl + '/api/Utente/' + data.data)
                  .then(
                    function(data) {
                      UtenteFactory.setUtente(data.data);
                      $location.path('/');
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
        },
        function(error) {
          alert('login ko');
        }
      );
    }
  }]);
