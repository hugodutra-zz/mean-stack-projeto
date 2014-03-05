var app = angular.module('contatooh',['ngRoute', 'ngResource']);
app.config(function($routeProvider) {

	$routeProvider.when('/contatos', {
		templateUrl: 'partials/contatos',
		controller: 'ContatosController'
	});

	$routeProvider.when('/contato/:contatoId', {
		templateUrl: 'partials/contato', 
		controller: 'ContatoController'
	});

	$routeProvider.when('/contato', {
		templateUrl: 'partials/contato', 
		controller: 'ContatoController'
	});

	$routeProvider.otherwise({redirectTo: '/contatos'});
});
