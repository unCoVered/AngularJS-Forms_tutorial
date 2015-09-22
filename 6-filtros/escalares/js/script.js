var app = angular.module("app", []);

app.controller("PruebaController", ["$scope", function ($scope) {
    
    $scope.fecha = new Date();
    $scope.numeroDecimal = 4815.162342;
    $scope.texto = "Hooola KO";
    $scope.objeto = '{nombre : "Juan", apellido : "Perez", direccion : {calle : "Calle inutil", numero : 22}}';
    
}]);