'use strict';

/* App Module */
//cuando loguea un admin, se utiliza una estructura nueva, por eso tenemos una variable de este tipo otra ves, es equivalente al app 


var siclaApp = angular.module('siclaApp', [
  'ngRoute'
 // 'siclaAdminControllers',
 // 'siclaServices'
  //'siclaFilters'
]);

siclaApp.config(['$routeProvider',
  function ($routeProvider){
    $routeProvider.when('/altas/protagonista', {
        templateUrl: 'partials/admin/altaProtagonista.html',
        controller: 'FormProtagonistaCtrl'
      }).when('/altas/medio', {
        templateUrl: 'partials/admin/altaMedio.html',
        controller: 'FormMedioCtrl'
      }).when('/altas/autor', {
        templateUrl: 'partials/admin/altaAutores.html',
        controller: 'FormAutorCtrl'
      }).when('/altas/temas', {
        templateUrl: 'partials/admin/altaTemas.html',
        controller: 'FormTemasCtrl'
      }).when('/altas/nota', {
        templateUrl: 'partials/admin/altaNotas.html',
        controller: 'FormNotasCtrl'
    }).when('/altas/recientes', {
    	templateUrl: 'partials/admin/notasRecientes.html',
    	controller: 'TblRecientesCtrl'
    }).otherwise({
        redirectTo: '/altas/nota'
      });
}]);
