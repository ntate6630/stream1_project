angular.module('cookingapp', ['ngRoute', 'angular-storage', 'RouteControllers', 'UserService']);

angular.module('cookingapp').config(function($routeProvider) {

	$routeProvider.when('/accounts/register', {
		templateUrl: 'templates/register.html',
		controller: 'RegisterController'
	});/*
	.when('/accounts/login', {
		templateUrl: 'templates/login.html',
		controller: 'LoginController'
	})
	.when('/accounts/logout', {
		templateUrl: 'templates/logout.html',
		controller: 'LogoutController'
	})
	.when('/recipes', {
		templateUrl: 'templates/recipes.html',
		controller: 'RecipesController',
	})
	.when('/howTo', {
		templateUrl: 'templates/howto.html',
		controller: 'HowToController',
	})
	.when)'/video', {
		templateUrl: 'templates/video.html',
		controller: 'VideoController',
	})
	.when('/shop', {
		templateUrl: 'templates/shop.html',
		controller: 'ShopController',
	});*/
});
