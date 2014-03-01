var Mongoose = require('mongoose');

var ContatoSchema = new Mongoose.Schema({
  nome: String,
  email: String
});

exports.Contato = Mongoose.model('Contato', ContatoSchema);