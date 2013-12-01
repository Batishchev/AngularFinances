var module = angular.module('modal', []);

module.directive('modal', function() {
   return {
      restrict: 'E',
      scope: {
         name: '@'
      },
      controller: function($scope, $element, $attrs) {
         $scope.active = false;

         $scope.close = function() {
            $scope.active = false;
         }

         $scope.open = function() {
            $scope.active = true;
         }
      },
      template: '<div class="modal" ng_class="{active: active}" ng_transclude></div>',
      transclude: true,
      replace: true
   }
});
