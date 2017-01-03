angular.module('RouteControllers', [])

	.controller('HomeController', function($scope) {
        
			
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
					/*	ng-model="accountBarShowOrHide"; 		Hide "Login" in the "Account access bar" when the user has logged in to account */
					/*  ng-model="accountBarShowOrHide";		Hide "Register" in the "Account access bar" when the user has logged in to account */
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
                    $location.path("templates/home.html");
					
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
	.controller('ShopController', function() {
		
	})
	.controller('SearchBarController', function($scope) {
			$scope.recipes = function() {
			var recipes = [
				{type:"Fish", name:"Baked salmon", location:"url1"},
				{type:"Dessert", name:"Apple pie", location:"url2"},
				{type:"Soups", name:"Ministroni soup", location:"url3"},
				{type:"Meat", name:"Roast beef", location:"url4"},
				{type:"Dessert", name:"Custard tart", location:"url5"},
				{type:"Dessert", name:"Mince pie", location:"url6"},
				{type:"Meat", name:"Chicken curry", location:"url7"},
				{type:"Pasta", name:"Spagetti bolognese", location:"url8"},
				{type:"Seafood", name:"Prawn salad", location:"url9"},
				{type:"Eggs", name:"Cheese and bacon quiche", location:"url10"},
				{type:"Soups", name:"Carrot soup", location:"url11"},
				{type:"Dessert", name:"Orange pancakes", location:"url12"},
				{type:"Meat", name:"Shepards pie", location:"url13"},
				{type:"Appetizer", name:"Cheese toasties", location:"url14"},
				{type:"Dessert", name:"Chocolate icecream", location:"url15"},
				{type:"Vegetarian", name:"Baked potato", location:"url16"},
				{type:"Salads", name:"Vegetable	salad", location:"url17"},
				{type:"baking", name:"Puff pastries", location:"url18"},
				{type:"baking", name:"Shortbread biscuits", location:"url19"},
				{type:"Eggs", name:"Cheese and onion omlette", location:"url20"},
				{type:"Meat", name:"Chicken kebabs", location:"url21"},
				{type:"Dessert", name:"Cheese cake", location:"url22"}
				];
			$scope.recipes = recipes;
			
			console.log($scope.searchText)

			};
		});
