//var siclaAdminControllers = angular.module('siclaAdminControllers', []);

siclaApp.controller('FormProtagonistaCtrl', ['$scope','$http',
  function($scope,$http) {
    $scope.alerta = {"tipo":"","mensaje":""};
     $scope.formProtagonista = {};
	 $scope.cargos = {};
	 $http.get("data/consultas/allcargos.php").success(function(data){
		console.log(data);
		$scope.cargos = data;	 
	});
     $scope.updateProtagonista=function(protagonista){
      $scope.formProtagonista = angular.copy(protagonista);

          $scope.alerta.tipo = "alert alert-success";
          $scope.alerta.mensaje =" Dato almacenado en base de datos";
     };
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
     $scope.opcionesArea = {};
     $scope.opcionesTema = {};
     $http.get('data/consultas/areas.php').success(function(data) {
     	$scope.opcionesArea = data;
     	console.log(data);
     });
     $scope.getTema = function(area) {
     	$http.post('data/consultas/temas-area.php', {'area':area}).success(function(data) {
     		console.log(data);
     		$scope.opcionesTema = data;
     	});
     };
     $scope.updateTema=function(tema){      
     console.log(tema);
      $http.post('data/inserciones/insercionTema.php', tema).success(function(data) {
      	console.log(data);
      	$scope.opcionesTema = data;
      });
      	  $scope.formTema = angular.copy(tema);
          $scope.alerta.tipo = "alert alert-success";
          $scope.alerta.mensaje =" Tema almacenado  correctamente en base de datos";
     };
      $scope.updateSubtema=function(subtema){
      console.log(subtema);
      $http.post('data/inserciones/insercionSubtema.php', subtema).success(function(data) {
      	console.log(data);
      });
          $scope.formSubtema = angular.copy(subtema);
          $scope.alerta.tipo = "alert alert-success";
          $scope.alerta.mensaje =" Subtema almacenado  correctamente en base de datos";
     };
      $scope.updateArea=function(area){
      console.log(area);      
      $http.post('data/inserciones/insercionArea.php', area).success(function(data) {
      	console.log(data);
      	$scope.opcionesArea = data;
      }); 
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
	$scope.alerta = {"tipo":"","mensaje":""};
	
// OPCIONES PARA MEDIOS
    $http.get("data/medios.php").success(
    function(data2){
        $scope.opcionesMedios = data2;
        console.log($scope.opcionesMedios);
    });
	
//Opciones para tema
	$http.get("data/consultas/temas.php").success(function(data){
		$scope.opcionesTema = data;
		console.log(data);	
	});

//Opciones para protagonista 
	$http.get("data/consultas/protagonistas.php").success(function(data){
		$scope.opcionesProtagonista = data;
		console.log(data);	
	});
	
//Opciones para municipio
	$http.get("data/consultas/municipios.php").success(function(data){
		$scope.opcionesMunicio = data;
		console.log(data);
	});
	
// OPCIONES PARA AUTOR
        $scope.getAutor=function(medio){
          console.log(medio);
          $http.get("data/autores.php?id="+medio).success(
          function(data2){
			  $('select[ng-model="nota.autor"] option[value=""]').text("Seleccione");
              $scope.opcionesAutores = data2;
              console.log($scope.opcionesAutores);
			  
          });
        }

//Opciones para cargo
	$scope.getCargo = function(id){
		$http.post("data/consultas/cargos.php",{'protagonista':id.idProtagonista}).success(function(data){
			console.log(data);
			$scope.opcionesCargo = data;
			$('select[ng-model="nota.cargo"] option[value=""]').text("Seleccione");	
		});
	};
	
//Opciones para Subtemas
	$scope.getSubtema = function(id){
		$http.post("data/consultas/subtemas.php",{'tema':id.idTema}).success(function(data){
			console.log(data);
			$scope.opcionesSubtema = data;	
			$('select[ng-model="nota.subtema"] option[value=""]').text("Seleccione");
		});
	};
	
//Guardar nota
	$scope.updateNota = function(nota){
		console.log(nota);
		$http.post("data/inserciones/insercionNota.php", nota).success(function(data){
			console.log(data);
			$scope.alerta.tipo = "alert alert-success";
          	$scope.alerta.mensaje =" Dato almacenado en base de datos";	
		});	
	};
		    
// OPCIONES PARA TIPO DE NOTA No está implementad
        $scope.getTipo=function(){
          console.log(medio);
          $http.get("data/tipo_nota.php").success(
          function(datos){
              $scope.opcionesTipoNota = datos;
              console.log($scope.opcionesTipoNota);
          });
        }  
    }]); 
    
    siclaApp.controller('TblRecientesCtrl', ['$scope', '$http',
    function($scope, $http) {
    	$scope.notas={};
    	$http.get('data/consultas/notasRecientes.php').success(
    	function(data) {
    		$scope.notas = data;
    		console.log(data);
    	});
    }]);