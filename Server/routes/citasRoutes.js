import { Router } from "express";
import { getCitaHandler,postCreateCita } from "../handlers/citaHandlers.js";

const citasRouter = Router();

citasRouter.post("/", postCreateCita);

citasRouter.get("/", getCitaHandler);

export default citasRouter; 
