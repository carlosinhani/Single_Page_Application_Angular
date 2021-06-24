let app = angular.module('App'["ngRout"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "template/home.html"
        })
        .when("/pagina1", {
            templateUrl: "template/p1.html"
        })
        .when("/pagina2", {
            templateUrl: "template/p2.html"
        })
        .when("/pagina3", {
            templateUrl: "template/p3.html"
        })
    .otherwise({ redirectTo: '/' })
})