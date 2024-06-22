import { Router } from "express";
import {
  getPaymentsHandler,
  failureHandler,
  pendingHandler,
  webhookHandler,
  statusHandler,
} from "../handlers/paymentsHandler.js";

import { crearOrdenHandler } from "../handlers/paymentsHandler.js";

const paymentsRouter = Router();
console.log('Estoyen routes de MP')
paymentsRouter.get("/", getPaymentsHandler);
paymentsRouter.get("/status/:id", statusHandler);
paymentsRouter.post("/webhook", webhookHandler);
paymentsRouter.get("/failure", failureHandler);
paymentsRouter.get("/pending", pendingHandler);
paymentsRouter.post("/crearorden", crearOrdenHandler);

export default  paymentsRouter;
