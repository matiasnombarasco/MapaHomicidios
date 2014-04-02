'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('index', [function() {

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {
        $scope.map = {
            center: {
                latitude: 45,
                longitude: -73
            },
            zoom: 8
        };
  }]);
