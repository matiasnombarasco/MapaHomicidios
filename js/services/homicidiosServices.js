var HomicidiosServices = angular.module('homicidioServices', ['ngResource']);

phonecatServices.factory('Homicidios', ['$resource',
    function($resource){
        this.chiche = "Hola Chiche";

        return $resource('homicidios/homicidios.json', {}, {
            query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
        });
    }]);