var app = angular.module("app", []);

function PruebaController($scope) {
    $scope.mensaje = "Hola KO";
    
    $scope.cambiarMensaje = function () {
        $scope.mensaje = "Qué me estás container!";
    };
}