import { Router } from "express";
import {
  createCasosHandler,
  getCasoHandler,
  deleteCasoHandler,
  getTipoDeCasoByIdHandler,
} from "../handlers/casosHandlers.js";

const casosRouter = Router();

casosRouter.get("/", getCasoHandler);

casosRouter.get("/:idCaso", getTipoDeCasoByIdHandler);

casosRouter.post("/", createCasosHandler);

casosRouter.post("/findecaso", deleteCasoHandler);

export default casosRouter;
