var Contato = require('../model/Contato.js').Contato;

exports.listaContatos = function(req, res) {
  console.log('API: listaContatos');
  Contato.find({},  function(err, contatos) {
    if (err) return console.error(err);
    res.json(contatos);
  });
};

exports.obtemContato = function(req, res) {
  req.session.teste = "primeiro";
  Contato.findById(req.params.id,  function(err, contato) {
      if (err) {
        res.send(500);
        return console.error(err);
      }
      res.json(contato);
  });
};

exports.removeContato = function(req, res) {
  console.log('API: removeContato')
  Contato.findByIdAndRemove(req.params.id, function() {
      res.send(200);
  });
  
};

exports.salvaContato = function(req, res) {
  var contato = req.body;
  try {
    
    contato = contato._id ? 
      atualiza(contato) : 
      adiciona(contato);

    res.json(contato);
  } catch(err) {
    console.log(err);
    res.send(500);
  }
};

function adiciona(contato) {
  console.log('Salvando contato');
  new Contato(contato).save(function(err) {
     if (err) return console.error(err);
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