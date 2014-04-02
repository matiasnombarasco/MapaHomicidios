angular.module('Persona', [])
    .controller('HomicidioController', function() {
        this.fecha = undefined;
        this.direccion = '';
        this.gps = undefined;
        this.tipo = ''; /* arma de fuego o cuchilo o no espeficado */
        this.victima = undefined;
        this.imputado = undefined;
        this.comisaria = undefined;
        this.resumen = '';
        this.link = '';
        this.fuente = '';
    });