angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.t = 0; //toggle for showing new listing form
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.newListing = '';

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function() {
      $scope.listings.push($scope.newListing);
      $scope.newListing = '';
    };
    $scope.deleteListing = function(list) {
      $scope.listings.splice($scope.listings.indexOf(list), 1);
    };
    $scope.showDetails = function(list) {
      $scope.t=0;
      $scope.detailedInfo = [];
      $scope.detailedInfo.push($scope.listings[$scope.listings.indexOf(list)]);
    };
  }
]);
