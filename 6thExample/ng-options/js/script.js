var app = angular.module("app", []);

app.controller("PruebaController", function ($scope) {
    $scope.provincias = [
        {
            idProvincia : 2,
            nombre : "Castellon"
        },
        {
            idProvincia : 3,
            nombre : "Alicante"
        },
        {
            idProvincia : 1,
            nombre : "Zaragoza"
        },
        {
            idProvincia : 7,
            nombre : "Teruel"
        },
        {
            idProvincia : 5,
            nombre : "Tarragona"
        }
    ];
    
    $scope.miProvinciaSeleccionada = null;
    
});