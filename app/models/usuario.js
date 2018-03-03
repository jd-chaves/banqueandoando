var bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose'); // for working w/ our database
var Schema = mongoose.Schema;

var UsuarioSchema = new Schema({
nombre: String,
usuario: { type: String, required: false, index: { unique: true }},
password: { type: String, select: true }
 });

 // codificar la contraseña antes de guardarla
 UsuarioSchema.pre('save', function(next) {
 var user = this;

if (!user.isModified('password')) return next();

bcrypt.hash(user.password, null, null, function(err, hash) {
if (err) return next(err);
user.password = hash;
next();
});
});
UsuarioSchema.methods.comparePassword = function(password) {
var user = this;
return bcrypt.compareSync(password, user.password);
};

module.exports = UsuarioSchema;
