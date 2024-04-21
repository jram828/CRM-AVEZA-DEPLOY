const express = require('express');
const router = express.Router();
const clienteCtrl = require('../controllers/cliente.controller');
const getCliente = require('../controllers/getCliente');
const login = require('../controllers/login')
const postUsuario = require("../controllers/postUsuario");
const postCliente = require("../controllers/postCliente");
const getClienteAll = require('../controllers/getClienteAll');
const relacionarPaises = require('../controllers/relacionarPaises');
// const SMS = require("../controllers/SMS")

router.get('/contrato', getCliente);
router.get("/conocimientolitigios", getClienteAll);
router.get("/login", login);
router.post('/crearusuario', postUsuario);//guardar
router.post("/relacionarpaises", relacionarPaises);
router.post("/registrocliente", postCliente);
router.get('/:id', getCliente);// obtiene un único C
router.put('/:id',clienteCtrl.editarCliente); //Actualizar datos (uno a la vez)
router.delete('/:id', clienteCtrl.eliminarCliente);

module.exports = router;


// const login = require("../controllers/login");
// const postFav = require("../controllers/postFav");

// const deleteFav = require("../controllers/deleteFav");
// const getCharById = require("../controllers/getCharById");

// router.get("/character/:id", getCharById);
// router.get("/login", login);
// router.post("/login", login);
// router.post("/register", postUser);
// router.post("/fav", postFav);
// router.delete("/fav/:id", deleteFav);

