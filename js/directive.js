angular.module('UserStatusDirective',[]).directive('userStatus', function() {
  return {
    restrict: 'EA',    // EA -> element/attribute
    templateUrl: 'templates/directives/user-status.html'
  };
});