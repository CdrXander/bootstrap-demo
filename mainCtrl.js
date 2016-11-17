angular.module('boot')
  .controller('mainCtrl', function ($scope, dataService) {

    (function getDogs() {
      $scope.dogs = dataService.getDogs()
    }())


    $scope.addLike = function(id) {
      $scope.dogs =dataService.addLike(id);
    }
    $scope.addPuppy = function (puppy) {
      $scope.dogs = dataService.addPuppy(puppy);
    }


})
