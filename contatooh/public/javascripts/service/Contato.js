app.factory('Contato', function($resource) {

	return $resource('/contatos/:id');
});