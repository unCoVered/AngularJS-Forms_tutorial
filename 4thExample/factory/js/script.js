var app = angular.module("app", []);

app.factory("idioma", function () {
    return "es-es";
});

app.factory("matematicas_simples", function () {
    return {
        sumar : function (a, b) {
            return a + b;
        },
        restar : function (a, b) {
            return a - b;
        }
    };
});

app.factory("radio", function () {
    return 10;
});

app.factory("area", function () {
    return function (radio) {
        return 3.1416 * radio * radio;
    };
});


app.controller("PruebaController", ['$scope', "idioma", "matematicas_simples", "radio", "area", function ($scope, idioma, matematicas_simples, radio, area) {
    
    $scope.idioma = idioma;
    $scope.suma = matematicas_simples.sumar(3, 6);
    $scope.area = area(radio);
    
}]);