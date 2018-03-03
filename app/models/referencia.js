var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UsuarioSchema = require('./usuario');

var ReferenciaSchema = new Schema({
puntos: Number,
banco: String,
texto:  String,
nombre: String,
usuario: String
 });



module.exports = ReferenciaSchema;
