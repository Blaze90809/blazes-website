var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngMessages']);

//Routes//
myApp.config(function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider
    .when('/', {
        templateUrl: '/views/templates/home.html',
        controller: 'HomeController as hc',
    })
    .when('/projects', {
        templateUrl: '/views/templates/projects.html',
        controller: 'ProjectController as pc'
    })
    .when('/career', {
        templateUrl: '/views/templates/careerswitch.html',
        controller: 'HomeController as hc'
    })
    .otherwise({
        redirectTo: '/'
    });
});