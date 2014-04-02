'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('index', [function() {

  }])
  .controller('Mapa', ['$scope', function($scope) {
        $scope.map = {
            center: {
                latitude:-32.9377441,
                longitude: -60.6536844
            },
            zoom: 12
        };
  }]);
