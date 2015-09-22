var app = angular.module("app", []);

function mayusculasFilter(valor,length) {
   
  if (typeof (valor)==="string") {
     
    if (angular.isNumber(length) && length>=0) {
      return valor.substr(0,length).toUpperCase()+valor.substr(length);
    } else {
      return valor.toUpperCase();
    }
     
     
  } else if (angular.isArray(valor)) {
    var newValue=[];
     
    for(var i=0;i<valor.length;i++) {
      if (typeof (valor[i])==="string") {
        if (angular.isNumber(length) && length>=0) {
          newValue.push(valor[i].substr(0,length).toUpperCase()+valor[i].substr(length));
        } else {
          newValue.push(valor[i].toUpperCase());
        }
      } else {
        newValue.push(valor[i]);
      }
    }
     
    return newValue;
  } else {
    return valor;
  }
};

function mayusculasFilterFactory() {
  return mayusculasFilter;
};
	
app.filter("mayusculas",['$log',function ($log) {
  $log.log("Creando el filtro");
  return mayusculasFilter;
}]);

app.controller("PruebaController",['$scope',function($scope) {
    $scope.valorEscalar="hola mundo";
    $scope.valorArray=['lunes','martes',3.1416,'miercoles','jueves'];
}]);