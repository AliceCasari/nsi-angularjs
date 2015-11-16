'use strict';

/**
 * @ngdoc function
 * @name angularnewcourseApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the angularnewcourseApp
 */
angular.module('angularnewcourseApp')
  .controller('LoginCtrl', ['$http', '$location', function ($http, $location) {
    var vm = this;
    vm.username = 'admin';
    vm.password = 'Password1!';
    vm.submit = login;

    function login() {
      console.log('login');

      $http.post('https://nsi-prenota.azurewebsites.net/api/Account/Login',
        {
          UserName: vm.username,
          Password: vm.password,
          IsPersistent: true
        },
        {withCredentials: true}
      )
      .then(
        function(response) {
          $location.path('/')
        },
        function(error) { // optional
          console.log('login ko', error);
        }
      );
    }
  }]);
