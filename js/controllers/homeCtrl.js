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


app.controller('altaUsrCtrl', ['$scope','$http',
  function($scope,$http) {
    $scope.Usr ={};
    $scope.insertUsr=function(newUsr){
        console.log(newUsr);   
    var $promise= $http.post("data/inserciones/insercionUsrs.php",newUsr);
     $promise.then(function(msg){
      console.log(msg.data);  
          //$scope.alerta.tipo = "alert alert-success";
          //$scope.alerta.mensaje =" Dato almacenado en base de datos";
     });
   };
     // $http.get("data/bdNotasSimple2.php").success(function(data4){
     // $scope.notasDefault = data4;
     // console.log(data4);
  }]);
  
app.controller('sliderPeriodicos', ['$scope','$http',
  function($scope,$http){
    $scope.varPeriodicoActivo;
    $scope.varNotas = {};
    var actualizaNotas = function(a){
      var resultado;
      $http.get("data/consultas/notasRecientes.php")
        .success(function(notasHoy){
          resultado=notasHoy;
          console.log(notasHoy);
          console.log(resultado);
        });
      console.log(resultado); 
      return resultado;
    }




    $http.get("data/consultas/medios.php")
    .success(function(medios){
        $scope.varPeriodicos=angular.copy(medios);
        console.log($scope.varPeriodicos);
        $http.get("data/consultas/notasRecientes.php")
        .success(function(notasHoy){
            var nslide = notasHoy.length;
           // $scope.varNotas= notasHoy;
            var slides = $scope.slides = [];
            $scope.addSlide = function(img,txt,id,fecha) {
              slides.push({
                image: img,
                text: txt,
                id:id,
                fecha:fecha
              });
            };
            for (var i=0; i< nslide; i++) {
             // $scope.addSlide($scope.notas8col[i].img8col,$scope.notas8col[i].titulo,$scope.notas8col[i].idNoticia,$scope.notas8col[i].fecha);
            }

        });  
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