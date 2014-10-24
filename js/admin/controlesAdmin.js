//var siclaAdminControllers = angular.module('siclaAdminControllers', []);

siclaApp.controller('FormProtagonistaCtrl', ['$scope','$http',
  function($scope,$http) {
    $scope.alerta = {"tipo":"","mensaje":""};
     $scope.formProtagonista = {};
	 $http.get("data/consultas/allcargos.php").success(function(data){
		console.log(data);
		$scope.cargos = data;	 
	 });
	 $http.get("data/consultas/protagonistas.php").success(function(data1){
		console.log(data1);
		$scope.protagonistas = data1;	 
	 });
     $scope.updateProtagonista=function(protagonista){
		 $http.post("data/inserciones/insercionProtagonista.php",protagonista).success(function(data){
			$scope.protagonistas = data;
			console.log(data);	 
			$scope.alerta.tipo = "alert alert-success";
         	$scope.alerta.mensaje =" Dato almacenado en base de datos";
		 });
     };
	 $scope.getCargo = function(protagonista){
		$http.post("data/consultas/notcargos.php",protagonista).success(function(ev){
			console.log(ev);
			$scope.crg = ev;	
		});
	};
	$scope.updateProt = function(){
		var datos = $scope.formCargoProt;
		$http.post("data/inserciones/insercionCargoProtagonista.php", datos).success(function(data){
			console.log(data);
			$scope.crg = data;
			$scope.alerta.tipo = "alert alert-success";
         	$scope.alerta.mensaje =" Dato almacenado en base de datos";		
		});
	};
	$scope.updateCargo = function(cargo){
	 	$http.post("data/inserciones/insercionCargo.php",cargo).success(function(data){
			$scope.cargos = data;
			console.log(data);
			$scope.alerta.tipo = "alert alert-success";
         	$scope.alerta.mensaje =" Dato almacenado en base de datos";	
		});
	};
}]); 

siclaApp.controller('FormMedioCtrl', ['$scope','$http',
  function($scope,$http) {
     $scope.alerta = {"tipo":"","mensaje":""};
          $scope.formMedio = {};
          $scope.formAutor = {};
          $scope.opcionesMedios = {};
          $scope.opcionesAutor = {};
          $http.get("data/consultas/medios.php").success(
          function(data) {
          	$scope.opcionesMedios = data;
          	console.log(data);
          });
     
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
          
          $scope.getAutor=function(id) {
          	console.log(id);
          	var promise = $http.post("data/consultas/autorEnMedio.php",{"medio":id});
          	promise.then(function(msg) {
          		console.log(msg.data);
          		$scope.opcionesAutor = msg.data;
          	})
          };
          
          $scope.updateColabora=function(medio, autor) {
          	console.log(medio);
          	console.log(autor);
          	var promise = $http.post('data/inserciones/insercionMedioAutor.php', {"medio":medio, "auto":autor});
          	promise.then(function(msg) {
          		console.log(msg.data);
          	});
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






  siclaApp.controller('FormNotasCtrl', ['$scope','$http', '$compile', '$timeout',
  function($scope,$http,$compile,$timeout) {
    $scope.nota={};
    //$scope.nota.fecha = date();
    $scope.nota.pagina = 1;
    $scope.nota.num = 0;
    //$scope.nota.otros = [];
    //$scope.nota.otrosSub = [];
  var auxi = 0;
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
		$scope.opcionesProtagonsita = data;
		console.log(data);	
	});
	
//Opciones para municipio
	$http.get("data/consultas/municipios.php").success(function(data){
		$scope.opcionesMunicipio = data;
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
			var file = document.getElementById("exampleInputFile"), formData = new FormData();
			formData.append("imagen", file.files[0]);
			formData.append("nota",data);
			formData.append("nota","3");
			$.ajax({
				url:'data/inserciones/insercionPortada.php',
				type: 'POST',
				data: formData,
				processData: false,
				contentType: false,
				dataType: 'json',
				success: function(ev) {				
					console.log(ev);	
				}
			});
		});	
	};
	//Opciones para Otros Subtemas
	$scope.getSub = function(tema) {
		$http.post("data/consultas/subtemas.php",{'tema':tema.idTema}).success(function(data){
			console.log(data);
			$scope.opcionesOtros = data;
			$('select[ng-model="nota.otrosSub"] option[value=""]').text("Seleccione");
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
        };
    $scope.masST = function(valor){
      if (valor == undefined)
      {
        auxi++;
        var clone = $('#otsb').clone() ;
        clone.find("select[ng-model='nota.otrosSub[0]']").attr("ng-model","nota.otrosSub["+auxi+"]").attr("ng-disabled","!nota.otros["+auxi+"]");
        clone.find("select[ng-model='nota.otros[0]']").empty().append("<option value='' disabled>Seleccione</option>");
        clone.find("select[ng-model='nota.otros[0]']").attr("ng-click","masST(nota.otros["+auxi+"].idTema)").attr("on-finish-render","sel("+auxi+")");        
        clone.find("select[ng-model='nota.otros[0]']").attr("ng-model","nota.otros["+auxi+"]").attr("ng-change","getSub(nota.otros["+auxi+"])");        
        var compiled = $compile(clone);
        $('#otsb').after(clone);                
		/*$scope.$watch('nota.otros['+auxi+']',function(){
				$scope.nota.otros[auxi].idTema = "2";
				//$scope.nota.otros[auxi] = 2;
		});*/		
		$timeout(function(){
			$scope.nota.otros[auxi].idTema = "1";
			//console.log("error");
		});
        /*$scope.$evalAsync(function() {
        	if ($scope.nota.otros.length > auxi)
        		$scope.nota.otros[auxi] = "";
        });*/
        compiled($scope);
      }
    };     
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
    
    siclaApp.controller('FormEstadosCtrl', ['$scope', '$http',
    function($scope, $http) {
    	$http.get('data/consultas/estados.php').success(
    	function(data) {
    		$scope.opcionesEstados = data;
    		console.log(data);
    	});
    	
    	$scope.updateEstado = function(estado) {
    		$http.post("data/inserciones/insercionEstado.php", estado).success(function(data) {
    			console.log(data);
    			$scope.opcionesEstados = data;
    		});  		
    	};
    	
    	$scope.updateMunicipio = function(municipio){
    		$http.post("data/inserciones/insercionMunicipio.php", municipio).success(function(data) {
    			console.log(data);
    		});
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