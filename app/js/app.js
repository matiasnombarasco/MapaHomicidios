'use strict';


// Declare app level module which depends on filters, and services
angular.module('HomicidiosApp', [
  'ngRoute',
  'google-maps',
  'HomicidiosApp.filters',
  'HomicidiosApp.services',
  'HomicidiosApp.directives',
  'HomicidiosApp.controllers',

]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/test', {templateUrl: 'partials/test.html', controller: 'MapaController'});
  $routeProvider.when('/mapa', {templateUrl: 'partials/mapa.html', controller: 'Mapa'});
  $routeProvider.otherwise({redirectTo: '/mapa'});
}]);
