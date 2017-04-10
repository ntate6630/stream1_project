angular.module("UserService", [])

.factory('UserAPIService', function($http) {
    UserAPIService = {
        callAPI: function(url, data) {
            return $http.post(url, data)
        }
    };
    return UserAPIService;
});

var app = angular.module("UserJsonService", []);

app.service("read_json_Service", function ($http, $q) {
    var deferred = $q.defer();
    $http.get("json/instructions.json").then(function (data)
    {
        deferred.resolve(data);
    });

    this.getDish = function ()
    {
        return deferred.promise;
    }
});
