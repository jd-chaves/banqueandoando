var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ViviendaSchema = new Schema({
banco: String,
tipo1: Number,
tipo2: Number,
tipo3: Number,
tipo4: Number,
tipo5: Number,
tipo6: Number,
tipo7: Number,
tipo8: Number
 });


module.exports = ViviendaSchema;
