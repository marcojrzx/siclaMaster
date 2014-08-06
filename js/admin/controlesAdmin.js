//var siclaAdminControllers = angular.module('siclaAdminControllers', []);

siclaApp.controller('FormProtagonistaCtrl', ['$scope','$http',
  function($scope,$http) {
    $scope.alerta = {"tipo":"","mensaje":""};
     $scope.formProtagonista = {};
     $scope.updateProtagonista=function(protagonista){
      $scope.formProtagonista = angular.copy(protagonista);

          $scope.alerta.tipo = "alert alert-success";
          $scope.alerta.mensaje =" Dato almacenado en base de datos";
     };
    }]); 



  siclaApp.controller('altaAdmin', ['$scope','$http',
  function($scope,$http) {
    $scope.admin ={};
    $scope.insertAdmin=function(newAdmn){
      admin = angular.copy(newAdmn);
        console.log(admin);   
    var $promise= $http.post("data/inserciones/insercionAdmin.php",newAdmn);
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


siclaApp.controller('FormMedioCtrl', ['$scope','$http',
  function($scope,$http) {
     $scope.alerta = {"tipo":"","mensaje":""};
     $scope.formMedio = {};


     $scope.updateMedio=function(medio){
      console.log(medio);
      var $promise= $http.post("data/inserciones/insercionMedio.php",medio);
     $promise.then(function(msg){
      console.log(msg.data);
     });
      $scope.formMedio = angular.copy(medio);
      $scope.alerta.tipo = "alert alert-success";
      $scope.alerta.mensaje =" Dato almacenado en base de datos";
     };
    }]); 

siclaApp.controller('FormAutorCtrl', ['$scope','$http',
  function($scope,$http) {
    $scope.alerta = {"tipo":"","mensaje":""};
    $scope.formAutor = {};
    $scope.opcionesMedios={};
// OPCIONES PARA MEDIOS
	$http.get("data/medios.php").success(
    function(data2){
        $scope.opcionesMedios = data2;
        console.log($scope.opcionesMedios);
    });     
     $scope.updateAutor=function(autor){
     console.log(autor);
     var $promise = $http.post("data/inserciones/insercionAutor.php",autor);
     $promise.then(function(msg) {
     	console.log(msg);
     });
      $scope.formAutor = angular.copy(autor);
          $scope.alerta.tipo = "alert alert-success";
          $scope.alerta.mensaje =" Dato almacenado en base de datos";
     };
    }]); 



siclaApp.controller('FormTemasCtrl', ['$scope','$http',
  function($scope,$http) {
    $scope.alerta = {"tipo":"","mensaje":""};
     $scope.formTema = {};
     $scope.formSubtema = {};
     $scope.formArea = {};
     $scope.updateTema=function(tema){
      $scope.formTema = angular.copy(tema);
          $scope.alerta.tipo = "alert alert-success";
          $scope.alerta.mensaje =" Tema almacenado  correctamente en base de datos";
     };
      $scope.updateSubtema=function(subtema){
      $scope.formSubtema = angular.copy(subtema);
          $scope.alerta.tipo = "alert alert-success";
          $scope.alerta.mensaje =" Subtema almacenado  correctamente en base de datos";
     };
      $scope.updateArea=function(area){
      $scope.formArea = angular.copy(area);
          $scope.alerta.tipo = "alert alert-success";
          $scope.alerta.mensaje =" Area almacenada  correctamente en base de datos";
     };
    }]);

  siclaApp.controller('UsrCtrl', ['$scope','$http',
  function($scope,$http) {
  	var nm="";
  	$http.get('data/consultas/nombre.php').success(function(data) {
  		if (data != "")
  		{ 
  			$http.get('data/consultas/nombre.php').success(
  				function(data2){ 
  					nm = data2; 
  					$scope.usr = {"nombre":nm,"mensaje":""};
  				});  		
  		}
  		else{ 
  			window.location.assign("index.html");
  		}
  	});  	
  	
    $scope.Out = function(){
    	$http.get('data/consultas/cerrar.php');
    	window.location.assign("index.html");    	
    };
    }]);
     

  siclaApp.controller('AdminButtons', ['$scope','$http',
  function($scope,$http) {
    $scope.tog = 2;
    var nm="";
    $http.get('data/consultas/nombre.php').success(
    	function(data2){ 
    		nm = data2; 
    		$scope.usr = {"nombre":nm,"mensaje":""};     
    	});
    }]);






  siclaApp.controller('FormNotasCtrl', ['$scope','$http',
  function($scope,$http) {
    $scope.nota={};
    $scope.opcionesMedios={};
// OPCIONES PARA MEDIOS
    $http.get("data/medios.php").success(
    function(data2){
        $scope.opcionesMedios = data2;
        console.log($scope.opcionesMedios);
    });
// OPCIONES PARA AUTOR
        $scope.getAutor=function(medio){
          console.log(medio);
          $http.get("data/autores.php?id="+medio).success(
          function(data2){
              $scope.opcionesAutores = data2;
              console.log($scope.opcionesAutores);
          });
        }    
// OPCIONES PARA TIPO DE NOTA
        $scope.getTipo=function(){
          console.log(medio);
          $http.get("data/tipo_nota.php").success(
          function(datos){
              $scope.opcionesTipoNota = datos;
              console.log($scope.opcionesTipoNota);
          });
        }  


    $scope.alerta = {"tipo":"","mensaje":""};
     $scope.formMedio = {};
     $scope.updateMedio=function(medio){
      $scope.formMedio = angular.copy(medio);
          $scope.alerta.tipo = "alert alert-success";
          $scope.alerta.mensaje =" Dato almacenado en base de datos";
     };
    }]); 