var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrdinarioSchema = new Schema({
banco: String,
tipo1: Number,
tipo2: Number,
tipo3: Number,
tipo4: Number,
tipo5: Number
 });


module.exports = OrdinarioSchema;
