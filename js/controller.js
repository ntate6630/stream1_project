angular.module('RouteControllers', [])

	.controller('HomeController', function($scope) {
        $scope.title = "Home";
    })
    .controller('RegisterController', function($scope, $location, UserAPIService, store) {

        $scope.registrationUser = {};
        var url = "https://morning-castle-91468.herokuapp.com/";

        $scope.login = function() {
            UserAPIService.callAPI(url + "accounts/api-token-auth/", $scope.data).then(function(results) {
                $scope.token = results.data.token;
                store.set('username', $scope.registrationUser.username);
                store.set('authToken', $scope.token);
				
                $location.path("templates/home.html");
            }).catch(function(err) {
                console.log(err.data);
            });
        }

        $scope.submitForm = function() {
            if ($scope.registrationForm.$valid) {
                $scope.registrationUser.username = $scope.user.username;
                $scope.registrationUser.password = $scope.user.password;

                UserAPIService.callAPI(url + "accounts/register/", $scope.registrationUser).then(function(results) {
                    $scope.data = results.data;
                    if ($scope.data.username == $scope.registrationUser.username 
                        && $scope.data.password == $scope.registrationUser.password) {
                        
                        $scope.login();
						$location.path("templates/home.html")
                    }
                }).catch(function(err) {
                    console.log(err)
                });
            }
        }
    })
    .controller('LoginController', function($scope, $location, UserService, store) {
        var url = "https://morning-castle-91468.herokuapp.com/";

        $scope.submitForm = function() {
            if ($scope.loginForm.$isValid) {
                $scope.loginUser.username = $scope.user.username;
                $scope.loginUser.password = $scope.user.password;

                UserAPIService.callAPI(url + "accounts/api-token-auth", $scope.data).then(function(results) {
                    $scope.token = results.data.token;
                    store.set('username', $scope.loginUser.username);
                    store.set('authToken', $scope.token);
                    $location.path("/home.html");
					
                }).catch(function(err) {
                    console.log(err);
                });
            }
        };
    })
	.controller('LogoutController', function(store) {
        store.remove('username');
        store.remove('authToken');
    })
	.controller('SearchBarController', function($scope) {
			$scope.recipes = function() {
			var recipes = [
				{type:"Fish", name:"Baked salmon", location:"baked_salmon_with_herbs",image:"baked_salmon_with_herbs.jpg"},
				{type:"Dessert", name:"Apple pie", location:"apple_pie",image:"applepie.jpg"},
				{type:"Soups", name:"Minestrone soup", location:"minestrone_soup",image:"minestrone_soup.jpg"},
				{type:"Meat", name:"Roast beef", location:"roast_beef",image:"roast_beef.jpg"},
				{type:"Dessert", name:"Custard tart", location:"custard_tart",image:"custard_tart.jpg"},
				{type:"Dessert", name:"Mince pie", location:"mince_pie",image:"mince_pie.jpg"},
				{type:"Meat", name:"Chicken curry", location:"chicken_curry",image:"chicken_curry.jpg"},
				{type:"Pasta", name:"Spagetti bolognese", location:"spagetti_bolgnese",image:"spagetti_bolognese.jpg"},
				{type:"Seafood", name:"Prawn salad", location:"prawn_salad",image:"prawn_salad.jpg"},
				{type:"Eggs", name:"Cheese and bacon quiche", location:"cheese_and_bacon_quiche",image:"cheese_and_bacon_quiche.jpg"},
				{type:"Soups", name:"Carrot soup", location:"carrot_soup",image:"carrot_soup.jpg"},
				{type:"Dessert", name:"Orange pancakes", location:"orange_pancakes",image:"orange_pancakes.jpg"},
				{type:"Meat", name:"Shepards pie", location:"shepards_pie",image:"shepards_pie.jpg"},
				{type:"Appetizer", name:"Cheese toasties", location:"cheese_toasties",image:"cheese_toasties.jpg"},
				{type:"Dessert", name:"Chocolate icecream", location:"chocolate_icecream",image:"chocolate_icecream.jpg"},
				{type:"Vegetarian", name:"Baked potato", location:"baked_potato",image:"baked_potato.jpg"},
				{type:"Salads", name:"Vegetable	salad", location:"vegetable_salad",image:"vegetable_salad.jpg"},
				{type:"baking", name:"Puff pastries", location:"puff_pastries",image:"puff_pastries.jpg"},
				{type:"baking", name:"Shortbread biscuits", location:"shortbread_biscuits",image:"shortbread_biscuits.jpg"},
				{type:"Eggs", name:"Cheese and onion omlette", location:"omelette",image:"omelette.jpg"},
				{type:"Meat", name:"Chicken kebabs", location:"chicken_kebab",image:"chicken_kebab.jpg"},
				{type:"Dessert", name:"Cheese cake", location:"cheese_cake",image:"cheese_cake.jpg"}
				];
			$scope.recipes = recipes;
			}
	})
	/*.controller('HowToController', function($scope) {
			
	}
	.controller('VideoController', function($scope) {
			
	}
	.controller('ShopController', function($scope) {
			
	})*/
//});

