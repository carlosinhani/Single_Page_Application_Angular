let app = angular.module('App' ["ngRout"]);

app.config(function($routeProvider){
     $routeProvider
       .when("/", {
           templateUrl: "template/home.html"
       })
})