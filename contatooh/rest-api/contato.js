var Contato = require('../model/Contato.js').Contato;

exports.listaContatos = function(req, res) {
  console.log('API: listaContatos');
  Contato.find({},  function(err, contatos) {
      if (err) return console.error(err);
      res.json(contatos);
  });
};

exports.obtemContato = function(req, res) {
  console.log('API: obtemContato');

  var idContato = req.params.id;
  Contato.findById(idContato,  function(err, contato) {
      if (err) {
        res.send(500);
        return console.error(err);
      }
      res.json(contato);
  });
};

exports.removeContato = function(req, res) {
  console.log('API: removeContato')

  var idContato = req.params.id;
  Contato.findByIdAndRemove(idContato, function() {
      res.send(200);
  });
  
};

exports.salvaContato = function(req, res) {
  var contato = req.body;
  try {
    if(contato._id) {
      contato = atualiza(contato);
    } else {
      contato = adiciona(contato);

    }
    res.json(contato);
  } catch(err) {
    console.log(err);
    res.send(500);
  }
};

function adiciona(contato) {
  console.log('Salvando contato');
  contato = new Contato(contato);
  contato.save(function(err) {
     console.log('antes dar pau');
     if (err) return console.error(err);
     console.log(this);
     return this;
  })
}

function atualiza(contato) {
  console.log('Atualizando contato');
  var contatoId = contato._id;
  delete contato._id;
  Contato.findByIdAndUpdate(contatoId, contato, function(err) {
    if (err) return console.error(err);
    return contato;
  });
}