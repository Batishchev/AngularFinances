var module = angular.module('financies', ['ngRoute', 'menu']);

module.factory('dataProvider', function() {
   var accounts = {};
   return {
      addAccount: function(name, currency, value) {
         if(accounts[name]) {
            return;
         }

         accounts[name] = {
            name: name,
            currency: currency,
            value: value,
            opened: new Date(),
            lastTransaction: new Date()
         }

         return accounts[name];
      },
      getAccounts: function() {
         return accounts;
      },
      removeAccount: function(name) {
         if(accounts[name]) {
            delete accounts[name];
         }
      }
   }
});

module.config(function($routeProvider, $locationProvider) {
   $routeProvider.when('/accounts', {
      templateUrl: 'templates/accounts.html'
   });
   $routeProvider.when('/transactions', {
      templateUrl: 'transactions.html'
   });
   $routeProvider.when('/groups', {
      templateUrl: 'groups.html'
   });
   $routeProvider.when('/charts', {
      templateUrl: 'charts.html'
   });
   $routeProvider.when('/addAccount', {
      templateUrl: 'templates/addAccount.html'
   });
//   $routeProvider.otherwise({
//      redirectTo: '/accounts'
//   });
   $locationProvider.html5Mode(true);
});

function MainController($scope, $route, $routeParams, $location) {
//   $scope.$route = $route;
//   $scope.$location = $location;
//   $scope.$routeParams = $routeParams;
}
