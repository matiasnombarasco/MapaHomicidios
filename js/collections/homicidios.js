angular.module('Homicidios', [])
    .controller("Homicidios", function($scope, $http) {
        $scope.homicidios = [];

        $http.get('/api/homicidios.json').success(function(homicidios) {
           console.log(homicidios);
            alert("hola chiche");
        });
    });

