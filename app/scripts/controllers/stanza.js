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
    vm.eventi = [];
    vm.calendario = [vm.eventi];

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

    vm.uiConfig = {
      calendar:{
        viewRender: function(view, element) {
          vm.eventi.splice(0, vm.eventi.length);
          var firstDayOfMonth = new Date(view.start.format()).toISOString();
          var lastDayOfMonth = new Date(view.end.format()).toISOString();
          $http.get(baseUrl + '/api/Stanza/' + $routeParams.id + '/PeriodiStato',
            {params: {inizio: firstDayOfMonth, fine: lastDayOfMonth}}
          )
            .then(
            function(data) {
              console.log('stato stanza', data);
              vm.stanzaDettaglio.Stato = data.data;
              angular.forEach(vm.stanzaDettaglio.Stato, function(itm) {
                vm.eventi.push({title: 'Stato ' + itm.Stato, start: itm.Inizio});
              });
              vm.calendario = [vm.eventi];
            },
            function(error) {
              alert('error');
            }
          );
        }
      }
    };
  }]);
