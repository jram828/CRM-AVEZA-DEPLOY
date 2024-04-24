const express = require('express');
const router = express.Router();
const clienteCtrl = require('../controllers/cliente.controller');
const getCliente = require('../controllers/getCliente');
const login = require('../controllers/login')
const postUsuario = require("../controllers/postUsuario");
const postCliente = require("../controllers/postCliente");
const getClienteAll = require('../controllers/getClienteAll');
const relacionarPaises = require('../controllers/relacionarPaises');
const relacionarDepartamentos = require("../controllers/relacionarDepartamentos");
const crearCiudades = require("../controllers/crearCiudades");
const deleteCliente = require("../controllers/deleteCliente");
// const SMS = require("../controllers/SMS")

router.get('/contrato', getCliente);
router.get("/conocimientolitigios", getClienteAll);
router.get("/login", login);
router.post('/crearusuario', postUsuario);//guardar
router.post("/relacionarpaises", relacionarPaises);
router.post("/relacionardepartamentos", relacionarDepartamentos);
router.post("/crearciudades", crearCiudades);
router.post("/registrocliente", postCliente);
router.get('/:id', getCliente);// obtiene un único C
router.put('/:cedula',clienteCtrl.editarCliente); //Actualizar datos (uno a la vez)
router.delete('/:cedula', deleteCliente);

module.exports = router;

