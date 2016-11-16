angular.module('boot')
  .controller('mainCtrl', function ($scope, dataService) {

    (function getMovies() {
      console.log('ran');
      $scope.movies = dataService.getMovies()
    }())


    $scope.addMovie = function(movie) {
      $scope.movies = dataService.addMovie(movie)
    }
  })
