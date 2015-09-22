var app = angular.module("app", []);

function RemoteResource($http, baseUrl) {
    this.get = function (fnOk, fnError) {
        $http({
            method : 'GET',
            url : baseUrl + '/resources/datos.json'
        }).success(function (data, status, headers, config) {
            fnOk(data);
        }).error(function (data, status, headers, config) {
            fnError(data);
        });
    };
    this.list = function (fnOk, fnError) {
        $http({
            method : 'GET',
            url : baseUrl + '/resources/listado_seguros.json'
        }).success(function (data, status, headers, config) {
            fnOk(data);
        }).error(function (data, status, headers, config) {
            fnError(data);
        });
    };
}

function RemoteResourceProvider() {
    var _baseUrl;
    this.setBaseUrl = function (baseUrl) {
        _baseUrl = baseUrl;
    };
    this.$get = ['$http', function ($http) {
        return new RemoteResource($http, _baseUrl);
    }];
}

app.provider("remoteResource", RemoteResourceProvider);

app.constant("baseUrl", ".");
app.config(['baseUrl', 'remoteResourceProvider', function (baseUrl, remoteResourceProvider) {
    remoteResourceProvider.setBaseUrl(baseUrl);
}]);


app.value("urlLogo", "http://www.cursoangularjs.es/lib/exe/fetch.php?cache=&media=unidades:04_masdirectivas:medical14.png");
app.run(["$rootScope", "urlLogo", function ($rootScope, urlLogo) {
    $rootScope.urlLogo = urlLogo;
}]);


app.filter("filteri18n", ["$filter", function ($filter) {
    var filterFn=$filter("filter");
    
    /** Transforma el texto quitando todos los acentos diéresis, etc. **/
    function normalize(texto) {
        texto = texto.replace(/[áàäâ]/g, "a");
        texto = texto.replace(/[éèëê]/g, "e");
        texto = texto.replace(/[íìïî]/g, "i");
        texto = texto.replace(/[óòôö]/g, "o");
        texto = texto.replace(/[úùüü]/g, "u");
        texto = texto.toUpperCase();

        return texto;
    }

    /** Esta función es el comparator en el filter **/
    function comparator(actual, expected) {
        if (normalize(actual).indexOf(normalize(expected)) >= 0) {
            return true;
        } else {
            return false;
        }
    }

    /** Este es realmente el filtro **/
    function filteri18n(array, expression) {
        //Lo único que hace es llamar al filter original pero pasado
        //la nueva función de comparator
        return filterFn(array, expression, comparator);
    }
    return filteri18n;
}]);

app.controller("DetalleSeguroController", ['$scope', 'remoteResource', function ($scope, remoteResuorce) {
    
    $scope.filtro = {
        ape1 : ""
    };
    
    $scope.sexos = [{
      codSexo: "H",
      descripcion: "Hombre"
    }, 
    {
      codSexo: "M",
      descripcion: "Mujer"
    }];
    
    $scope.seguro = {
        nif : "",
        nombre : "",
        edad : undefined,
        sexo : "",
        casado : false,
        numHijos : undefined,
        embarazada : false,
        coberturas : {
            oftalmologia : false,
            dental : false,
            fecundacionInVitro : false
        },
        enfermedades : {
            corazon : false,
            estomacal : false,
            rinyones : false,
            alergia : false,
            nombreAlergia : ""
        },
        fechaCreacion : new Date()
    };
    
    remoteResuorce.get(function (seguro) {
        $scope.seguro = seguro;
    }, function (data, status) {
        alert("FALLO WEY: " + status);
    });
}]);

app.controller("MainController", ['$scope', function ($scope, remoteResuorce) {
}]);

app.controller("ListadoSeguroController", ['$scope', 'remoteResource', function ($scope, remoteResuorce) {
    $scope.seguros = [];
    
    remoteResuorce.list(function (seguros) {
        $scope.seguros = seguros;
    }, function (data, status) {
        alert("FALLO WEY: " + status);
    });
}]);


$scope.urlLogo = "http://www.cursoangularjs.es/lib/exe/fetch.php?cache=&media=unidades:04_masdirectivas:medical14.png";


                                    
                                    
                            