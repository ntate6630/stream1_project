angular.module('SearchApp', ['ngRoute', 'RouteControllers', 'UserService', 'UserJsonService']);

angular.module('SearchApp').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes

    $routeProvider
    .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    .when('/recipes', {
        templateUrl: 'templates/recipes.html'
    })
    .when('/howTo', {
        templateUrl: 'templates/howto.html',
        controller: 'HowToController'
    })
    .when('/video', {
        templateUrl: 'templates/video.html'
    })
    .when('/accounts/logout', {
        templateUrl: 'templates/logout.html',
        controller: 'LogoutController'
    })
    .when('/accounts/login', {
		templateUrl: 'templates/login.html',
		controller: 'LoginController'
	})
    .when('/accounts/register', {
		templateUrl: 'templates/register.html',
		controller: 'RegisterController'
	});
});
