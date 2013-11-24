var financies = angular.module('financies', []);

financies.directive('tabs', function() {
   return {
      restrict: 'E',
      transclude: true,
      scope: {},
      controller: function($scope, $element) {
         var panes = $scope.panes = [];

         this.addPane = function(pane) {
            panes.push(pane);

            if(panes.length === 1)
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
               '<li ng_repeat="pane in panes" class="tab" ng_class="{selected: pane.selected}">' + 
                  '<a href="" ng_click="select(pane)">{{pane.title}}</a>' + 
               '</li>' + 
            '</ul>' + 
            '<div class="content" ng_transclude></div>' + 
         '</div>',
      replace: true
   };
});

financies.directive('pane', function() {
   return {
      require: '^tabs',
      restrict: 'E',
      transclude: true,
      scope: {
         title: '@'
      },
      link: function(scope, element, attrs, tabsController) {
         tabsController.addPane(scope);
      },
      template: '<div class="pane" ng_class="{active: selected}" ng_transclude></div>',
      replace: true
   };
});
