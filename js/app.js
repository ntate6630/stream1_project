angular.module('cookingApp', ['ngRoute', 'RouteControllers']);
 
angular.module('cookingApp').config(function($routeProvider) {
 
    $routeProvider.when('/register', {
		templateUrl: 'templates/register.html',
		controller: 'RegisterController'
	/*})
	.when('/login', {
		templateURL: 'templates/login.html',
		controller: 'LoginController'
	})
	.when('/logout', {
		templateURL: 'templates/logout.html',
		controller: 'LogoutController',
	})
	.when('/recipes', {
		templateURL: 'templates/recipes.html',
		controller: 'RecipesController',
	})
	.when('/howTo', {
		templateURL: 'templates/howto.html',
		controller: 'HowToController',
	})
	.when)'/video', {
		templateURL: 'templates/video.html',
		controller: 'VideoController',
	})
	.when('/shop', {
		templateURL: 'templates/shop.html',
		controller: 'ShopController',
	*/});
});
