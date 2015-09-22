var app=angular.module("app",[]);

app.controller("PruebaController", ['$scope', '$filter', function ($scope, $filter) {
    var filtroCurrency = $filter("currency");
    
    $scope.importeFormateado = filtroCurrency(2.5231);
    var filtroDate = $filter("date");
    $scope.fechaFormateada = filtroDate(new Date(), "fullDate");

}]);