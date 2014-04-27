'use strict';

/* Controllers */

angular.module('HomicidiosApp.controllers', [])
  .controller('index', [function() {

  }])
  .controller('Mapa', ['$scope', 'HomicidiosServices', function($scope, HomicidiosServices) {
        $scope.markers = [];
        $scope.showWindow = false;
        $scope.homicidios = HomicidiosServices.query();
        $scope.googleMap = {};
        $scope.map = {
            center: {
                latitude:-32.9377441,
                longitude: -60.6536844
            },
            zoom: 12
        };
        $scope.mapConfig = {
            templateUrl : 'markerWindow.html',
            gun : 'http://boasso24horas.com/mapas/homicidios/MapaHomicidios/app/img/gun.png'
        };

        $scope.markerIcon = {
            gun: 'img/gun.png',
            knife: 'img/knife.png',
            strike: 'img/strike.png',
            orca: 'img/orca.png',
            flame: 'img/flama.png'

        };
        $scope.getIcon = function(type) {
            if(type == 2) {
                return $scope.markerIcon.knife;
            }
            if(type == 3) {
                return $scope.markerIcon.strike;
            }
            if(type == 4) {
                return $scope.markerIcon.strike;
            }
            if(type == 5) {
                return $scope.markerIcon.flame;
            }

            return $scope.markerIcon.gun;
        };

        $scope.onMarkerClicked = function(item) {
                $scope.markers = [item.homicidio];
                $scope.showWindow = true;
        };

        $scope.prepareHeatMap = function(layer) {
                heatMapValues = [
                    new google.maps.LatLng(-32.9377441,-60.6536844)
                ];
            var pointArray = new google.maps.MVCArray(heatMapValues);
            layer.setData(pointArray);
        }

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

