var app = angular.module("app", []);

app.controller("PruebaController", function ($scope) {

    $scope.modelo = {
        
        nombre : "Pepe",
        showNombre : true,
        
        apellido : "Perez",
        showApellido : true
    };
    
});