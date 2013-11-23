var financies = angular.module('financies', []);

financies.directive('tabs', function() {
   return function (scope, element, attrs) {
      var ddo = {
         restrict: 'E',
         transclude: true,
         scope: {},
         controller: function($scope, $element) {
            $scope.panes = [];

            $scope.addPane = function(pane) {
               panes.push(pane);

               if($scope.panes.length === 0)
                  $scope.select(pane);
            };

            $scope.select = function(pane) {
               angular.forEach(panes, function(pane) {
                  pane.selected = false;
               });
               pane.selected = true;
            };
         },
         template: 
            '<div class="tabs">' + 
               '<ul>' + 
                  '<li ng_repeat="pane in panes">' + 
                     '<a href="" ng_click="select(pane)">{{pane.title}}</a>' + 
                  '</li>' + 
               '</ul>' + 
            '</div>',
         replace: true
      };
      return ddo;
   };
});

financies.directive('pane', function() {
   return function(scope, element, attrs) {
      var ddo = {
         require: '^tabs',
         restrict: 'E',
         transclude: true,
         scope: {
            title: 'none'
         },
         link: function(scope, element, attrs, tabsCtrl) {
            tabsCtrl.addPane(scope);
         },
         template: '<div class="pane" ng_class="{active: selected}" ng-transclude></div>',
         replace: true
      };
   };
});
