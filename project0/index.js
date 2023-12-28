var app = angular.module('productApp', ['ngRoute'])

app.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: '../view/signIn.html',
        controller: 'signInCtrl'
    })
        .when('/index', {
            templateUrl: '../view/index.html',
            controller: 'ProductController'

        }).when('/signUp', {
            templateUrl: '../view/signUp.html',
            controller: 'registration'

        }).otherwise({
            redirectTo: "/"
        })

})