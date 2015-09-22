var app = angular.module("app", []);
   
app.constant("miServicioConstante", "Hello world");

app.constant("idioma", "es-es");

app.constant("matematicas_simples", {
    sumar : function (a, b) {
        return a + b;
    },
    restar : function (a, b) {
        return a - b;
    }
});

app.constant("radio", 10);

app.constant("area", function (radio) {
    return 3.1416 * radio * radio;
});


app.controller("PruebaController", ['$scope', 'miServicioConstante', "idioma", "matematicas_simples", "radio", "area", function ($scope, miServicioConstante, idioma, matematicas_simples, radio, area) {
    
    $scope.valor = miServicioConstante;
    $scope.idioma = idioma;
    $scope.suma = matematicas_simples.sumar(3, 6);
    $scope.area = area(radio);
    
}]);