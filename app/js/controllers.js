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

        $scope.markerIcon = {
            gun: ''
        };
        $scope.tipo = function(homicidio) {

        };
        //
        $scope.comisaria = function(homicidio) {

        };
        $scope.filterByComisaria = function(item) {
           if( $("#comisaria").val() == null ) {
               return true;
           };
           if( $("#comisaria").val() ==  0) {
               return true;
           }
           // console.log($("#comisaria").val());

           if(_.indexOf($("#comisaria").val(), item.comisaria) >= 0) {

        return true;
           } else {
               return false;
           }

        };
        $scope.filterByTipo = function(item) {
           if($("#tipo").val() == 0 ) {
               return true;
           }

           if($("#tipo").val() == item.tipo) {
               return true;
           } else {
               return false;
           }
        };
        $scope.cleanFilter = function() {
            $scope.homicidios.query  = {};
        };
        $scope.cleanFilter();

  }]).controller('HomicidiosCrl', ['$scope','HomicidiosServices', function($scope, HomicidiosServices) {
        $scope.homicidios = HomicidiosServices.query();

    }]);

