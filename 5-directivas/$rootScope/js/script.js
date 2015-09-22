var app = angular.module("app", []);

app.value("appName", "Gestion de seguros medicos");

app.run(['$rootScope', 'appName', function ($rootScope) {
    $rootScope.appName = appName;
}]);

app.controller("Controller A", ["$scope", function ($scope) {
}]);

app.controller("Controller B", ["$scope", function ($scope) {
}]);
    