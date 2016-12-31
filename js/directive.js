angular.module('RecipesDirective',[]).directive('Recipes', function() {
  return {
    restrict: 'EA',    // EA -> element/attribute
    templateUrl: 'templates/directives/recipes-table.html'
  };
});