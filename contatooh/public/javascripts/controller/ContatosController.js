app.controller('ContatosController', function($scope, Contato) {

	$scope.filtro = '';
	$scope.total = 0;
	$scope.contatos = [];
	
	function buscaContatos() {
		Contato.query(function(retorno) {
			$scope.contatos = retorno;
		});
	}
	buscaContatos();

	$scope.remove = function(contato) {
		Contato.delete({id: contato.id}, function(status) {
			buscaContatos();
		});
	};
	$scope.incrementa = function() {
		$scope.total++;
	};
});
