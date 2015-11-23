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

            var now = new Date(new Date().setHours(0,0,0,0));
            var tomorrow = new Date(new Date().setHours(24,0,0,0));
            $http.get(baseUrl + '/api/Stanza/' + $routeParams.id + '/PeriodiStato',
              {params: {inizio: now, fine: tomorrow}}
            )
              .then(
                function(data) {
                  console.log('stato stanza', data);
                  vm.stanzaDettaglio.Stato = data.data;
                },
                function(error) {
                  alert('error');
                }
              );
          },
          function(error) {
            alert('error');
          }
        );
      }
    }
  }]);
