var addAccountController = function($scope, $location, dataProvider) {
   $scope.add = function() {
      dataProvider.addAccount($scope.name, $scope.currency, $scope.value);
      $location.path('/accounts');
   }

   $scope.back = function() {
      $location.path('/accounts');
   }
}
