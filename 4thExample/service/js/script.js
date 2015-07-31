var app = angular.module("app", []);
   
app.value("tamanyoInicialRectangulo", {
    ancho : 2,
    alto : 3
});

//function Rectangulo() {
//    this.ancho = 0;
//    this.alto = 0;

function Rectangulo(tamanyoInicial) {
    
    this.ancho = tamanyoInicial.ancho;
    this.alto = tamanyoInicial.alto;

    this.setAncho = function (ancho) {
        this.ancho = ancho;
    };

    this.setAlto = function (alto) {
        this.alto = alto;
    };

    this.getArea = function () {
        return this.ancho * this.alto;
    };
}
    
app.service("rectangulo", ["tamanyoInicialRectangulo", Rectangulo]);

app.controller("PruebaController", ['$scope', 'rectangulo', function ($scope, rectangulo) {
    
    rectangulo.setAncho(3);
    rectangulo.setAlto(6);
    
    $scope.area = rectangulo.getArea();
    
}]);