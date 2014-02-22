var app = angular.module('contatooh',['ngRoute', 'ngResource']);
app.config(function($routeProvider) {

	$routeProvider.when('/contatos', {
		templateUrl: 'partials/contatos.tpl.html',
		controller: 'ContatosController'
	});

	$routeProvider.when('/contato/:contatoId', {
		templateUrl: 'partials/contato.tpl.html', 
		controller: 'ContatoController'
	});

	$routeProvider.when('/contato', {
		templateUrl: 'partials/contato.tpl.html', 
		controller: 'ContatoController'
	});

	$routeProvider.otherwise({redirectTo: '/contatos'});
});
