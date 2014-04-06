'use strict';

/* Controllers */

angular.module('HomicidiosApp.controllers', [])
  .controller('index', [function() {

  }])
  .controller('Mapa', ['$scope', 'HomicidiosServices', function($scope, HomicidiosServices) {
        $scope.homicidios = HomicidiosServices.query();
        $scope.map = {
            center: {
                latitude:-32.9377441,
                longitude: -60.6536844
            },
            zoom: 12
        };
        $scope.mapConfig = {
            templateUrl : 'markerWindow.html',
            gun : 'http://localhost/MapaHomicidios/app/img/gun.png'
        };

  }]).controller('HomicidiosCrl', ['$scope','HomicidiosServices', function($scope, HomicidiosServices) {
        $scope.homicidios = HomicidiosServices.query();

    }]);

