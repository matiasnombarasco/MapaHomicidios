'use strict';

/* Services */

var dataService = angular.module('HomicidiosApp.services', ['ngResource']);

dataService.factory('HomicidiosServices', ['$resource', function($resource) {
        return $resource('../api/homicidios.json', {}, {method: 'GET' , isArray: true});
    }]
);
