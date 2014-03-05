var contato = require('../controllers/contato');

module.exports = function(app) {
  app.get('/contatos', contato.listaContatos);
  app.get('/contatos/:id', contato.obtemContato);
  app.delete('/contatos/:id', contato.removeContato);
  app.post('/contatos', contato.salvaContato);
}