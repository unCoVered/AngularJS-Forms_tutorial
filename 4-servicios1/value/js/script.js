var app = angular.module("app", []);
   
app.value("miServicioValue", "Hello world");

app.value("idioma", "es-es");

app.value("matematicas_simples", {
    sumar : function (a, b) {
        return a + b;
    },
    restar : function (a, b) {
        return a - b;
    }
});

app.value("radio", 10);

app.value("area", function (radio) {
    return 3.1416 * radio * radio;
});


app.controller("PruebaController", ['$scope', 'miServicioValue', "idioma", "matematicas_simples", "radio", "area", function ($scope, miServicioValue, idioma, matematicas_simples, radio, area) {
    
    $scope.valor = miServicioValue;
    $scope.idioma = idioma;
    $scope.suma = matematicas_simples.sumar(3, 6);
    $scope.area = area(radio);
    
}]);