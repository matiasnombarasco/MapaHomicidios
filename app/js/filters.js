'use strict';

/* Filters */

angular.module('HomicidiosApp.filters', []).
  filter('selectByTipo', function() {
    return function(homicidios, tipo) {

    };


  });


angular.module('HomicidiosApp.filters', []).
    filter('selectByComisaria', function() {
        return function(homicidios, comisaria) {
            var out = [{}];
            /*for(var homicidio in homicidios) {
             if(homicidio.comisaria == comisaria) {
             out.push(homicidio);
             }
             }
             return out;
             */
        };


    });
