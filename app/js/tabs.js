var module = angular.module('tabs', []);

module.directive('tabs', function() {
   return {
      restrict: 'E',
      transclude: true,
      scope: {},
      controller: function($scope, $element, $attrs, $transclude) {
         var panes = $scope.panes = [];

         this.addPane = function(pane) {
            if(!pane.title)
               pane.setTitle('unknown');
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

module.directive('pane', function() {
   return {
      require: '^tabs',
      restrict: 'E',
      transclude: true,
      scope: {
         title: '@'
      },
      controller: function($scope, $element, $attrs, $transclude) {
         $scope.setTitle = function(title) {
            $attrs.title = title;
         };
      },
      link: function(scope, element, attrs, tabsController) {
         tabsController.addPane(scope);
      },
      template: '<div class="pane" ng_class="{active: selected}" ng_transclude></div>',
      replace: true
   };
});
