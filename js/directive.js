angular.module('ShopDirective',[]).directive('shopTable', function() {
  return {
    restrict: 'EA',    // EA -> element/attribute
    templateUrl: 'templates/directives/shopTable.html'
  };
});
