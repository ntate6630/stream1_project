angular.module('cookingApp', ['ngRoute', 'RouteControllers']);
 
angular.module('cookingApp').config(function($routeProvider) {
 
    $routeProvider.when('/accounts/register', {
		templateUrl: 'templates/register.html',
		controller: 'RegisterController'
	});
});
