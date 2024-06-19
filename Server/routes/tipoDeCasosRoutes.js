import { Router } from "express";
import {
  postTipoDeCasoHandler,
  getTipoDeCasoHandler,
} from "../handlers/tipoDeCasosHandlers.js";
import { getTipoDeCasoByIdHandler } from "../handlers/casosHandlers.js";

const consultaRouter = Router();

consultaRouter.get("/", getTipoDeCasoHandler);

consultaRouter.post("/", postTipoDeCasoHandler);

//consultaRouter.post("/delete", deleteConsultaHandler);

export default consultaRouter;
