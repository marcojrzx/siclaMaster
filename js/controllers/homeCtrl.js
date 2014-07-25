'use strict';

app.controller('homeCtrl',['$scope','loginService', function($scope,loginService){
	$scope.txt = 'Home';
	$scope.logout = function(){
		loginService.logout();
	}
}]);


app.controller('inicioCtrl', ['$scope','$http',
  function($scope,$http) {
      $http.get("data/bdNotasSimple2.php").success(function(data4){
      $scope.notasDefault = data4;
      console.log(data4);
  });
  }]);


  function CarouselDemoCtrl ($scope,$http) {
    $http.get("data/bdDefault8col.php").success(function(col){
      $scope.notas8col = col;
      var nslide = col.length;
      console.log(col);
        $scope.myInterval = 5000;
  var slides = $scope.slides = [];
  $scope.addSlide = function(img,txt,id,fecha) {
    //var newWidth = 600 + slides.length;
    slides.push({
      image: img,
      text: txt,
      id:id,
      fecha:fecha
    });
  };
  for (var i=0; i< nslide; i++) {
    $scope.addSlide($scope.notas8col[i].img8col,$scope.notas8col[i].titulo,$scope.notas8col[i].idNoticia,$scope.notas8col[i].fecha);
  } 
    });
   
}