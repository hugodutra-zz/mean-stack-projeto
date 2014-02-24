var ID_CONTATO_INC = 3;

var contatos = [
  {_id: 1, nome: 'Contato Exemplo 1', email: 'cont1@empresa.com.br'},
  {_id: 2, nome: 'Contato Exemplo 2', email: 'cont2@empresa.com.br'},
  {_id: 3, nome: 'Contato Exemplo 3', email: 'cont3@empresa.com.br'}
]; 

exports.listaContatos = function(req, res) {
  console.log('API: listaContatos');
  res.json(contatos);
};

exports.obtemContato = function(req, res) {
  console.log('API: obtemContato');
  var idContato = req.params.id;
  var contato;
  for(var i = 0; i < contatos.length; i++) {
    if(contatos[i]._id == idContato) {
      contato = contatos[i];
    }
  }
  res.json(contato);
};

exports.removeContato = function(req, res) {
  console.log('API: removeContato')
  var idContato = req.params.id;

  for(var i = 0; i < contatos.length; i++) {
    if(contatos[i]._id == idContato) {
      contatos.splice(i, 1);
      break;
    }
  }
  res.send(204);
};

exports.salvaContato = function(req, res) {
  console.log('API: salvaContato');
  var contato = req.body;
  if(contato._id) {
    contato = atualiza(contato);
  } else {
    contato = adiciona(contato);

  }
  res.json(contato);
};

function adiciona(contato) {
  ID_CONTATO_INC++;
  contato._id = ID_CONTATO_INC;
  contatos.push(contato);
  return contato;
}

function atualiza(contato) {
  for(var i = 0; i < contatos.length; i++) {
    if(contatos[i]._id == contato._id) {
      contatos[i] = contato;
      break;
    }
  }
  return contatos[i];
}