'use strict';

app.controller('notaCtrl', ['$scope','$http','$routeParams',
  function($scope,$http, $routeParams) {
     // $scope.perio=$routeParams.id;
     console.log($routeParams.idNoticia);
      $http.get("data/consultaNota.php?Id="+$routeParams.idNoticia).success(function(data2){
      $scope.nota = data2;
      console.log($scope.nota);
    });
  }]);