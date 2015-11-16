'use strict';

/**
 * @ngdoc function
 * @name angularnewcourseApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the angularnewcourseApp
 */
angular.module('angularnewcourseApp')
  .controller('LoginCtrl', ['$http', '$location', 'baseUrl', '$rootScope', function ($http, $location, baseUrl, $rootScope) {
    var vm = this;
    vm.username = 'admin';
    vm.password = 'Password1!';
    vm.submit = login;

    function login() {
      console.log('login');

      $http.post(baseUrl + '/api/Account/Login',
        {
          UserName: vm.username,
          Password: vm.password,
          IsPersistent: true
        }
      )
      .then(
        function(response) {
          $rootScope.isAutenticated = true;
          $location.path('/')
        },
        function(error) {
          alert('login ko');
          $rootScope.isAutenticated = false;
        }
      );
    }

    $rootScope.logout = function () {
      console.log('logout');
      $http.post(baseUrl + '/api/Account/Logout'
      )
        .then(
        function(response) {
          $rootScope.isAutenticated = false;
          $location.path('/login')
        },
        function(error) {
          alert('logout ko');
        }
      );
    };
  }]);
