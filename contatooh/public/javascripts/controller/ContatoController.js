app.controller('ContatoController', function($scope, Contato, $routeParams) {

	$scope.contato = $routeParams.contatoId 
		? Contato.get({id: $routeParams.contatoId}) 
		: new Contato();

	$scope.salva = function() {
		var promise = $scope.contato.$save();
		promise.then(function(retorno) {
				$scope.mensagem = 'Salvo com sucesso.'
			})
			.catch(function(msg) {
				console.error(msg);
				$scope.mensagem = 'Não foi possível salvar.'
			});
	};
});