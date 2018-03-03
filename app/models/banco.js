var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ConsumoSchema = require('./consumo');
var MicroSchema = require('./micro');
var OrdinarioSchema = require('./ordinario');
var PreferencialSchema = require('./preferencial');
var TesoreriaSchema = require('./tesoreria');
var ViviendaSchema = require('./vivienda');

var BancoSchema = new Schema({
nombre:String,
puntos: Number,
imagen: String,
consumo: ConsumoSchema,
micro: MicroSchema,
ordinario: OrdinarioSchema,
preferencial: PreferencialSchema,
tesoreria: TesoreriaSchema,
vivienda: ViviendaSchema,
votos: Number

 });



module.exports = BancoSchema;
