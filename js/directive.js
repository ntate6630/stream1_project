angular.module("showUsernameDirective", [])

.directive('showUsername', function() {
    return {
      template: 'Logged in as: {{username}}'
    };

});