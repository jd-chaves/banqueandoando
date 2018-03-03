var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TesoreriaSchema = new Schema({
banco: String,
tipo1: Number,
tipo2: Number,
tipo3: Number
 });


module.exports = TesoreriaSchema;
