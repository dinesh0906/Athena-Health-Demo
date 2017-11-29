var app = angular.module('AthenaHealthDemoApp', ['ngRoute', 'ui.grid', 'ui.grid.pagination', 'ui.grid.autoResize', 'ui.grid.grouping']);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "views/html/home.html",
            controller: "HomeController"
        })
        .otherwise({redirectTo: '/' });
});

app.controller('IndexController', ['$scope', '$http', '$log', '$location', '$rootScope', '$window', function ($scope, $http, $log, $location, $rootScope, $window) {
    $scope.redirectToHomePage = function () {
        $location.path('/');
    };
}]);
