import { Router } from "express";

import { relacionarPaises} from "../controllers/relacionarPaises.js";
import { relacionarDepartamentos } from "../controllers/relacionarDepartamentos.js";
import { crearCiudades } from "../controllers/crearCiudades.js";
import {
  clientesDetailHandler,
  clientesHandler,
  postClientesHandler,
  postEliminaClientes,
  postActualizaClientes,
  // getClientByEmailHandler,
} from "../handlers/clientesHandlers.js";

const clientesRouter = Router();

clientesRouter.get("/conocimientolitigios", clientesHandler);
clientesRouter.get("/:cedulaCliente", clientesDetailHandler); // obtiene un único C

clientesRouter.post("/registrocliente", postClientesHandler);

clientesRouter.post("/relacionarpaises", relacionarPaises);
clientesRouter.post("/relacionardepartamentos", relacionarDepartamentos);
clientesRouter.post("/crearciudades", crearCiudades);

clientesRouter.put("/:cedulaCliente", postActualizaClientes); //Actualizar datos (uno a la vez)

clientesRouter.delete("/:email", postEliminaClientes);

export default clientesRouter;

// clientesRouter.get("/email", getClientByEmailHandler);