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

RunModule.$inject = ['$rootScope', '$location', 'UtenteFactory'];
function RunModule($rootScope, $location, UtenteFactory) {
  $rootScope.$on('$routeChangeStart', function(event, next, current) {
    console.log(next.$$route.originalPath.indexOf('login'), UtenteFactory.getUtente.data.Cognome);
    if(next.$$route.originalPath.indexOf('login') === -1 && !UtenteFactory.getUtente.data.Cognome){
      $location.path('/login');
    }
  });
}
