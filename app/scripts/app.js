'use strict';

/**
 * @ngdoc overview
 * @name angularnewcourseApp
 * @description
 * # angularnewcourseApp
 *
 * Main module of the application.
 */
angular
  .module('angularnewcourseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/stanze', {
        templateUrl: 'views/stanze.html',
        controller: 'StanzeCtrl',
        controllerAs: 'stanze'
      })
      .when('/stanza', {
        params: {id: null},
        templateUrl: 'views/stanza.html',
        controller: 'StanzaCtrl',
        controllerAs: 'stanza'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/'
      });

    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.withCredentials = true;
  })
  .run(RunModule)
  .value('baseUrl', 'https://nsi-prenota-v2.azurewebsites.net');

RunModule.$inject = ['$rootScope', '$location', '$http', 'baseUrl', 'UtenteFactory'];
function RunModule($rootScope, $location, $http, baseUrl, UtenteFactory) {
  $rootScope.$on('$routeChangeStart', function(event, next, current) {
    if(next.$$route.originalPath.indexOf('login') === -1){
      $http.get(baseUrl + '/api/Account/UtenteId')
        .then(
        function(data) {
          $http.get(baseUrl + '/api/Utente/' + data.data)
            .then(
            function(data) {
              UtenteFactory.setUtente(data.data);
              $rootScope.activePage = next.$$route.originalPath;
              $location.path($rootScope.activePage);
            },
            function(error) {
              $rootScope.activePage = '/login';
              $location.path('/login');
            }
          );
        },
        function(error) {
          $rootScope.activePage = '/login';
          $location.path('/login');
        }
      );
    } else {
      $rootScope.activePage = '/login';
    }
  });
}
