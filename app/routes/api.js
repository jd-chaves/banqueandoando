const mongoose = require("mongoose"); // for working w/ our database
const jwt        = require("jsonwebtoken");
const config     = require("../../config");
const BancoSchema  = require("../models/banco");
const Banco = mongoose.model("Banco", BancoSchema);
const ConsumoSchema  = require("../models/consumo");
const Consumo = mongoose.model("Consumo", ConsumoSchema);
const OrdinarioSchema  = require("../models/ordinario");
const Ordinario = mongoose.model("Ordinario", OrdinarioSchema);
const PreferencialSchema  = require("../models/preferencial");
const Preferencial = mongoose.model("Preferencial", PreferencialSchema);
const TesoreriaSchema  = require("../models/tesoreria");
const Tesoreria = mongoose.model("Tesoreria", TesoreriaSchema);
const ViviendaSchema  = require("../models/vivienda");
const Vivienda = mongoose.model("Vivienda", ViviendaSchema);
const MicroSchema  = require("../models/micro");
const Micro = mongoose.model("Micro", MicroSchema);
const UsuarioSchema  = require("../models/usuario");
const Usuario = mongoose.model("Usuario", UsuarioSchema);
const ReferenciaSchema  = require("../models/referencia");
const Referencia = mongoose.model("Referencia", ReferenciaSchema);

// super secret for creating tokens
const superSecret = config.secret;
module.exports = function(express) {

  const apiRouter = express.Router();
  apiRouter.post("/usuario",function (req, res){
    var user = new Usuario();
    user.nombre = req.body.nombre;
    user.usuario = req.body.usuario;
    user.password = req.body.password;
    user.save(function(err) {
      if (err) {
        return res.send(err);
      }
    });
    res.json({ success: true, message: "Usuario agregados" });

  });
  apiRouter.post("/usuarios",function (req, res){
    var elementos = req.body;
    elementos.forEach(function(element){
      var user = new Usuario();
      user.nombre = element.nombre;
      user.usuario = element.usuario;
      user.password = element.password;
      user.save(function(err) {
        if (err) {
          return res.send(err);
        }
      });
    });
    res.json({ success: true, message: "Usuarios agregados" });
  });
  apiRouter.get("/mejoresBancos", function(req, res) {
    var elementos = req.body;
    Banco.find(function(err, bancos) {
      if (err) return res.send(err);
      bancos.sort(function(a, b) {
        return parseFloat(b.puntos) - parseFloat(a.puntos);
      });
      res.json(bancos);
    })
  });
  //lOG IN EN LA APLICACIÓN -----------------------------------------------------------------------------------------------------------
  apiRouter.post("/authenticate", function(req, res) {

    Usuario.findOne({
      usuario: req.body.usuario
    }).select("_id nombre").exec(function(err, user) {
      if (err) throw err;

      // no user with that username was found
      if (!user) {
        res.json({
          success: false,
          message: "El nombre de usuario no existe."
        });
      } else if (user) {

        // check if password matches
        var validPassword = user.comparePassword(req.body.password);
        if (!validPassword) {
          res.json({
            success: false,
            message: "Contraseña incorrecta"
          });
        } else {

          // if user is found and password is right
          // create a token
          var token = jwt.sign({
            _id: user.id,
            nombre: user.nombre,
            usuario: user.usuario,
          }, superSecret, {
            expiresIn: "24h" // expires in 24 hours
          });
          // return the information including token as JSON
          res.json({
            success: true,
            message: "Enjoy your token!",
            token: token
          });
        }

      }

    });
  });

  // Obtener bancos mejores puntuados--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  apiRouter.get("/mejoresBancos", function(req, res) {
    var elementos = req.body;
    Banco.find(function(err, bancos) {
      if (err) return res.send(err);
      bancos.sort(function(a, b) {
        return parseFloat(b.puntos) - parseFloat(a.puntos);
      });
      res.json(bancos);
    })
  });
  // Obtener bancos peores puntuados--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  apiRouter.get("/peoresBancos", function(req, res) {
    var elementos = req.body;
    Banco.find(function(err, bancos) {
      if (err) return res.send(err);
      bancos.sort(function(a, b) {
        return parseFloat(a.puntos) - parseFloat(b.puntos);
      });
      res.json(bancos);
    })
  });
  // Insertar una referencia--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  apiRouter.post("/insertarReferencia",function(req,res){
    Referencia.findOne({banco:req.body.banco,usuario:req.body.usuario},function(err, ref){
      if(err) return res.send(err);
      if(!ref){
        var referencia = new Referencia();
        referencia.puntos = req.body.puntos;
        referencia.banco = req.body.banco;
        referencia.texto = req.body.texto;
        referencia.nombre = req.body.nombre;
        referencia.usuario = req.body.usuario;
        referencia.save(function(err){
          if (err) return res.send(err);
          Banco.findOne({nombre:req.body.banco}, function(err, banco){
            banco.puntos = 	parseInt( ( ( parseInt(req.body.puntos,10)+(banco.puntos*banco.votos ) )/(banco.votos+1)), 10)
            banco.votos = banco.votos +1;
            banco.save(function(err, uBanco){
              if (err) return res.send(err);
              res.json({ success: true, message: '¡Referencia creada!' });
            });
          });
        });
      }
      else {
        var puntosAntiguos = ref.puntos;
        ref.puntos = req.body.puntos;
        ref.texto = req.body.texto;
        ref.save(function(err){
          if (err) return res.send(err);
          Banco.findOne({nombre:req.body.banco}, function(err, banco){
            banco.puntos = 	parseInt( ( ( parseInt(req.body.puntos,10)+(banco.puntos*banco.votos )-(puntosAntiguos) )/(banco.votos)), 10)
            banco.save(function(err, uBanco){
              if (err) return res.send(err);
              res.json({ success: true, message: '¡Referencia Modificada!' });
            });
          });
        });
      }
    })

  });
  // Ver referencias------------------------------------------------------------------------------------------------------------------------------------------------------
  apiRouter.get("/referencias",function(req,res){
    Referencia.find(function(err, data){
      if(err) return res.send(err);
      return res.json({success:true, Referencias:data});
    })
  });
  // Ver referencias de un banco------------------------------------------------------------------------------------------------------------------------------------------------------
  apiRouter.get("/referencias/:nom_banco",function(req,res){
    Referencia.find({banco:req.params.nom_banco},function(err, data){
      if(err) return res.send(err);
      return res.json({success:true, Referencias:data});
    })
  });
  // Ver referencias de un cliente------------------------------------------------------------------------------------------------------------------------------------------------------
  apiRouter.get("/referencias/:usu_cliente",function(req,res){
    Referencia.find({usuario:req.params.usu_cliente},function(err, data){
      if(err) return res.send(err);
      return res.json({success:true, Referencias:data});
    })
  });
  // POSTS DE BANCOS Y DE CRÉDITOS EN BASE DE DATOS -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  apiRouter.post("/bancos",function(req, res) {
    var elementos = req.body;
    for (var i = 0; i < elementos.length; i++){
      var banco = new Banco();
      banco.nombre = elementos[i].nombre;
      banco.imagen =  elementos[i].imagen;
      banco.puntos= 3;
      banco.votos = 0;
      banco.save(function(err) {
        if (err) {
          return res.send(err);
        }
      });
    };
    res.json({ success: true, message: "Bancos agregados" });
  });

  apiRouter.post("/consumos", function(req, res) {
    var elementos = req.body;
    elementos.forEach(function(element){
      Banco.findOne({nombre:element.banco},function(err, banco){
        var consumo = {}//new Consumo();
        consumo.banco = element.banco;
        consumo.tipo1 =  element.tipo1;
        consumo.tipo2 = element.tipo2;
        consumo.tipo3 = element.tipo3;
        consumo.tipo4 = element.tipo4;
        banco.consumo = consumo;
        banco.save(function(err) {
          if (err) {
            return res.send(err);
          }
        });
      });
    });
    res.json({ success: true, message: "Consumos agregados" });
  });

  apiRouter.post("/micros", function(req, res) {
    var elementos = req.body;
    elementos.forEach(function(element){
      Banco.findOne({nombre:element.banco},function(err, banco){
        if(banco){
          var micro = new Micro();
          micro.banco = element.banco;
          micro.tipo1 =  element.tipo1;
          micro.tipo2 = element.tipo2;
          micro.tipo3 = element.tipo3;
          micro.tipo4 = element.tipo4;
          banco.micro = micro;
          banco.save(function(err) {
            if (err) {
              return res.send(err);
            }
          });
        }
        else {
          console.log(element.banco);
        }
      });
    });
    res.json({ success: true, message: "micros agregados" });
  });
  apiRouter.post("/ordinarios", function(req, res) {
    var elementos = req.body;
    elementos.forEach(function(element){
      Banco.findOne({nombre:element.banco},function(err, banco){
        if(banco){
          var ordinario = new Ordinario();
          ordinario.banco = element.banco;
          ordinario.tipo1 =  element.tipo1;
          ordinario.tipo2 = element.tipo2;
          ordinario.tipo3 = element.tipo3;
          ordinario.tipo4 = element.tipo4;
          ordinario.tipo5 = element.tipo5;
          banco.ordinario = ordinario;
          banco.save(function(err) {
            if (err) {
              return res.send(err);
            }
          });
        }
        else {
          console.log(element.banco);
        }
      });
    });
    res.json({ success: true, message: "ordinarios agregados" });
  });
  apiRouter.post("/preferenciales", function(req, res) {
    var elementos = req.body;
    elementos.forEach(function(element){
      Banco.findOne({nombre:element.banco},function(err, banco){
        if(banco){
          var preferencial = new Preferencial();
          preferencial.banco = element.banco;
          preferencial.tipo1 =  element.tipo1;
          preferencial.tipo2 = element.tipo2;
          preferencial.tipo3 = element.tipo3;
          preferencial.tipo4 = element.tipo4;
          banco.preferencial = preferencial;
          banco.save(function(err) {
            if (err) {
              return res.send(err);
            }
          });
        }
        else {
          console.log(element.banco);
        }
      });
    });
    res.json({ success: true, message: "preferenciales agregados" });
  });
  apiRouter.post("/tesorerias", function(req, res) {
    var elementos = req.body;
    elementos.forEach(function(element){
      Banco.findOne({nombre:element.banco},function(err, banco){
        if(banco){
          var tesoreria = new Tesoreria();
          tesoreria.banco = element.banco;
          tesoreria.tipo1 =  element.tipo1;
          tesoreria.tipo2 = element.tipo2;
          tesoreria.tipo3 = element.tipo3;
          banco.tesoreria = tesoreria;
          banco.save(function(err) {
            if (err) {
              return res.send(err);
            }
          });
        }
        else {
          console.log(element.banco);
        }
      });
    });
    res.json({ success: true, message: "tesorerias agregados" });
  });
  apiRouter.post("/viviendas", function(req, res) {
    var elementos = req.body;
    elementos.forEach(function(element){
      Banco.findOne({nombre:element.banco},function(err, banco){
        if(banco){
          var vivienda = new Vivienda();
          vivienda.banco = element.banco;
          vivienda.tipo1 =  element.tipo1;
          vivienda.tipo2 = element.tipo2;
          vivienda.tipo3 = element.tipo3;
          vivienda.tipo4 = element.tipo4;
          vivienda.tipo5 = element.tipo5;
          vivienda.tipo6 = element.tipo6;
          vivienda.tipo7 = element.tipo7;
          vivienda.tipo8 = element.tipo8;
          banco.vivienda = vivienda;
          banco.save(function(err) {
            if (err) {
              return res.send(err);
            }
          });
        }
        else {
          console.log(element.banco);
        }
      });
    });
    res.json({ success: true, message: "viviendas agregados" });
  });

  return apiRouter;
};
