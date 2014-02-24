var mongoClient = require('mongodb').MongoClient
var ObjectID = require('mongodb').ObjectID;

exports.listaContatos = function(req, res) {
  console.log('API: listaContatos');

  try {
    mongoClient.connect('mongodb://127.0.0.1:27017/contatooh', function(err, db) {
      if(err) throw err

      var collection = db.collection('contatos');
      collection.find().toArray(function(err, contatos) {
        res.json(contatos);
        db.close();
      });
    });
  } catch(err) {
    res.send(500);
  }
};

exports.obtemContato = function(req, res) {
  console.log('API: obtemContato');
  var idContato = req.params.id;

  try {
    mongoClient.connect('mongodb://127.0.0.1:27017/contatooh', function(err, db) {
      if(err) throw err

      var collection = db.collection('contatos');
      var cursor = collection.find({_id: new ObjectID(idContato)});
      cursor.nextObject(function(err, contato) {
        if(err) throw err
        res.json(contato);
        db.close();
      });
    });
  } catch(err) {
    console.log(err);
    res.send(500);
  }
};

exports.removeContato = function(req, res) {
  console.log('API: removeContato')
  var idContato = req.params.id;

  try {
    mongoClient.connect('mongodb://127.0.0.1:27017/contatooh', function(err, db) {
      if(err) throw err;
      var collection = db.collection('contatos');
      collection.remove({_id: new ObjectID(idContato)}, function() {
        if(err) throw err;
         res.send(204);
      });
    });
  } catch(err) {
      console.log(err);
      res.send(500);
  }
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
  try {
    mongoClient.connect(
    'mongodb://127.0.0.1:27017/contatooh', 
    function(err, db) {
        if(err) throw err;
        var id = db.collection('contatos').insert(contato, function(err, contato) {
          if(err) throw err;
           return id;
        })
    });
  } catch(err) {
    console.log(err);
    res.send(500);
  }
}

function atualiza(contato) {
  console.log('Atualizando contato');
  var objectId = new ObjectID(contato._id);
  try {
  mongoClient.connect(
  'mongodb://127.0.0.1:27017/contatoo', 
  function(err, db) {
      if(err) throw err;
      db.collection('contato').update({_id: objectId}, contato, function(err, contato) {
        if(err) throw err;
        return contato;
      });
  });
  } catch(err) {
    console.log(err);
    throw err;
  }
}