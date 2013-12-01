var accountsController = function($scope, $location, dataProvider) {
   $scope.accounts = dataProvider.getAccounts();

   $scope.add = function() {
      $location.path('addAccount');
   }

   $scope.remove = function(account) {
      dataProvider.removeAccount(account.name);
      $scope.accounts = dataProvider.getAccounts();
   }
}
