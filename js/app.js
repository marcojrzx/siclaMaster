'use strict '
var app = angular.module('Sicla', [                  // la variable app, es la que crea las relaciones 
													// entre las "clases" por asi decirlo
	'ngRoute',										//aqui se " inyectan " los servicios, todo lo que programes en 
													//otros js (otras variables)
	'ui.bootstrap'									// se tienen que inyectar aqui, son variables al estilo app, 
													// son muy globales y solo es para que se reconoscan las cosas
	]);


app.config(['$routeProvider',function ($routeProvider){
	$routeProvider.when('/login',{templateUrl:'partials/login.html',controller:'loginCtrl'});
	$routeProvider.when('/contacto',{templateUrl:'partials/contacto.html',controller:'contactoCtrl'});
	$routeProvider.when('/inicio',{templateUrl:'partials/inicio.html',controller:'inicioCtrl'});
	$routeProvider.when('/home',{templateUrl:'partials/home.html',controller:'homeCtrl'});
	$routeProvider.when('/registro',{templateUrl:'partials/tpl/altaUsuario.tpl.html',controller:'altaUsrCtrl'});
	//$routeProvider.when('/home/admin',{templateUrl:'partials/admin.html',controller:'homeCtrl'});
	//$routeProvider.when('home/admin/alta/protagonista',{templateUrl:'partials/admin/altaProtagonista.html',controller:'FormProtagonista'});
	//$routeProvider.when('home/admin/alta/medio',{templateUrl:'partials/admin/altaProtagonista.html',controller:'FormMedioCtrl'});
	//$routeProvider.when('home/admin/alta/autores',{templateUrl:'partials/admin/altaAutores.html',controller:'FormAutorCtrl'});
	//$routeProvider.when('home/admin/alta/temas',{templateUrl:'partials/admin/altaTemas.html',controller:'FormTemasCtrl'});
	//$routeProvider.when('home/admin/alta/notas',{templateUrl:'partials/admin/altaNotas.html',controller:'FormNotasCtrl'});


	$routeProvider.when('/nota/:idNoticia',{templateUrl:'partials/nota.html',controller:'notaCtrl'});
	$routeProvider.when('/nota/8/:idNoticia',{templateUrl:'partials/nota8.html',controller:'notaCtrl'});
	$routeProvider.otherwise({redirectTo:'/inicio'});	
	//$routeProvider.when('/home/hola',{templateUrl:'partials/admin/admin.html',controller:'adminCtrl'});


	//esto tiene una sintaxis asi > cuando reconoscas /login, usa el template de la ruta  partials / login y el controlador que se llama...
	// recuerda, en otro js, hay algun constructor que con la misma sintaxis que app, crea un controlador, o un servicio, a esos hace referencia
	// ya veras donde estan, cada uno se encarga de desplegar la info desde el servidor a una parte de la pagina en especifico aqui saves cual con cual
}]);
//   A LO DE ABAJO NO LE PONGAS ATENCION ES LO DE LOS LOGINS ES UN PEDOTE... SI PUEDES EVITAR MOVER ESTO, EVITALO Y LO VEMOS MAS TARDE..
// APRENDI A USARLO CON ESTE VIDEO   https://www.youtube.com/watch?v=4Y6LM4Y_K6c
app.run(function($rootScope,$location, loginService){
	var routespermission=['/home'];   // rutas que requieren login de momento no se la pude meter al de admin... 
	$rootScope.$on('$routeChangeStart', function(){
		if(routespermission.indexOf($location.path()) !=-1 )
		{
			var connected=loginService.islogged();
			connected.then(function(msg){
				if(!msg.data) $location.path('/login');
			});

			
					//  
		}

	});

});