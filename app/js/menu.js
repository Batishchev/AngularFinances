var module = angular.module('menu', []);

module.directive('menu', function() {
   return {
      restrict: 'E',
      controller: function($scope, $element, $attrs) {
         $scope.items = [];

         this.add = function(item) {
            $scope.items.push(item);

            if($scope.items.length === 1) {
               item.setActive(true);
            }
         };

         this.select = function(item) {
            for(var i = 0, current; current = $scope.items[i]; i++) {
               current.setActive(false);
            }
            item.setActive(true);
         };
      },
      template: '<div class="menu" ng_transclude></div>',
      replace: true,
      transclude: true
   };
});

module.directive('item', function($compile) {
   return {
      restrict: 'E',
      require: '^menu',
      scope: {},
      controller: function($scope, $element, $attrs) {
         $scope.active = false;
         
         $scope.select = function() {
            $scope.menuController.select($scope);
         }

         $scope.setActive = function(value) {
            $scope.active = value;
         }
      },
      link: function($scope, $element, $attrs, menuController) {
         $scope.menuController = menuController;
         menuController.add($scope);
      },
      template: '<a ng_transclude ng_class="{active: active}" ng_click="select()"></a>',
      transclude: true,
      replace: true
   };
});
