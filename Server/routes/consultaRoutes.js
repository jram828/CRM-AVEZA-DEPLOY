import { Router } from "express";
import { deleteConsultaHandler, postConsultaHandler, getConsultaHandler } from "../handlers/consultasHandlers.js";

const consultaRouter = Router();

consultaRouter.get("/", getConsultaHandler);

consultaRouter.post("/", postConsultaHandler);

consultaRouter.post("/delete", deleteConsultaHandler);

export default consultaRouter; 