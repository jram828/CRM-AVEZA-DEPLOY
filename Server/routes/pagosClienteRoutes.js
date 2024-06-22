import { Router } from "express";
import {
  postPagosClientesHandler,
  getPagosClientesHandler,
} from "../handlers/pagosHandlers.js";

const pagosClientesRouter = Router();

pagosClientesRouter.get("/", getPagosClientesHandler);

pagosClientesRouter.post("/", postPagosClientesHandler);

export default pagosClientesRouter;
