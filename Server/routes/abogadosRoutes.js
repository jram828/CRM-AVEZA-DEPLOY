import { Router } from "express";
import {
  getAbogadosHandler,
  postAbogadosHandler,
  getAbogadoDetailHandler,
  deleteAbogadoHandler,
  postActualizaAbogado,
} from "../handlers/abogadosHandlers.js";

const abogadosRouter = Router();

abogadosRouter.get("/", getAbogadosHandler);

abogadosRouter.get("/cedulaAbogado", getAbogadoDetailHandler);

abogadosRouter.post("/", postAbogadosHandler);

abogadosRouter.post("/delete", deleteAbogadoHandler);

abogadosRouter.post("/actualiza", postActualizaAbogado);

export default abogadosRouter;
