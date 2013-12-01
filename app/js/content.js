var module = angular.module('content', []);

module.directive('content', function() {
   return {
      restrict: 'E',
      controller: function($scope, $element, $attrs) {
         $scope.actions = [];

         this.add = function(action) {
            $scope.actions.push(action);
         }

         this.get = function() {
            return $scope.actions;
         }
      }
   }
});

module.directive('action', function() {
   return {
      restrict: 'E',
      require: '^content',
      scope: true,
      controller: function($scope, $element, $attrs) {
         $scope.name = "test";
         $scope.test = function() {
            console.log('click!!!');
         }
      },
      link: function($scope, $element, $attrs, contentController) {
         contentController.add($scope);
         $scope.contentController = contentController;
      }
   }
});

module.directive('actions', function() {
   return {
      restrict: 'E',
      require: '^content',
      link: function($scope, $element, $attrs, contentController) {
         $scope.contentController = contentController;
         $scope.actions = contentController.get();
      },
      controller: function($scope, $element, $attrs) {
         //$scope.actions = $scope.contentController.get();
      },
      template: '<div class="actions">' + '<div class="action" ng_repeat="action in actions">{{action.name}}</div>' + '</div>',
      replace: true
   }
});
