'use strict';

/**
 * @ngdoc function
 * @name angularnewcourseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularnewcourseApp
 */
angular.module('angularnewcourseApp')
  .controller('StanzaCtrl', ['$routeParams', '$http', 'baseUrl', function ($routeParams, $http, baseUrl) {
    var vm = this;
    vm.stanzaDettaglio = {};

    activate();

    function activate() {
      if ($routeParams.id) {
        $http.get(baseUrl + '/api/Stanza/' + $routeParams.id)
          .then(
          function(data) {
            vm.stanzaDettaglio = data.data;
          },
          function(error) {
            alert('error');
          }
        );
      }
    }
  }]);
