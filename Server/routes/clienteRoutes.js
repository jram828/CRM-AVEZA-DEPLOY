import { Router } from "express";
const clienteCtrl = require("../controllers/cliente.controller.js");
const getCliente = require("../controllers/getCliente.js");
const login = require("../controllers/login.js");
const postUsuario = require("../controllers/postUsuario.js");
const postCliente = require("../controllers/postCliente.js");
const getClienteAll = require("../controllers/getClienteAll.js");
const relacionarPaises = require("../controllers/relacionarPaises.js");
const relacionarDepartamentos = require("../controllers/relacionarDepartamentos.js");
const crearCiudades = require("../controllers/crearCiudades.js");
const deleteCliente = require("../controllers/deleteCliente.js");
// const SMS = require("../controllers/SMS")

import {
  clientesDetailHandler,
  clientesHandler,
  postClientesHandler,
  postEliminaClientes,
  postActualizaClientes,
  getClientByEmailHandler,
} from "../handlers/clientesHandlers.js";

const clientesRouter = Router();

clientesRouter.get("/contrato", getCliente);
clientesRouter.get("/conocimientolitigios", getClienteAll);
clientesRouter.get("/login", login);
clientesRouter.post("/crearusuario", postUsuario); //guardar
clientesRouter.post("/relacionarpaises", relacionarPaises);
clientesRouter.post("/relacionardepartamentos", relacionarDepartamentos);
clientesRouter.post("/crearciudades", crearCiudades);
clientesRouter.post("/registrocliente", postCliente);
clientesRouter.get("/:id", getCliente); // obtiene un único C
clientesRouter.put("/:cedula", clienteCtrl.editarCliente); //Actualizar datos (uno a la vez)
clientesRouter.delete("/:celular", deleteCliente);

export default clientesRouter;



// clientesRouter.get("/", clientesHandler);

// clientesRouter.get("/email", getClientByEmailHandler);

// clientesRouter.get("/:cedulaCliente", clientesDetailHandler);

// clientesRouter.get("/email", getClientByEmailHandler);

// clientesRouter.post("/", postClientesHandler);

// clientesRouter.post("/elimina", postEliminaClientes);

// clientesRouter.post("/actualiza", postActualizaClientes);

//clientesRoutes.get("/cedulaCliente", getClientByIDHandler);


