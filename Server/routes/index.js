import { Router } from "express";
import abogadosRouter from "./abogadosRoutes.js";
import clientesRoutes from "./clienteRoutes.js";
import consultaRouter from "./consultaRoutes.js";
import tipoDeCasosRouter from "./tipoDeCasosRoutes.js";
import casosRouter from "./casosRoutes.js";
import loginRouter from "./loginRoute.js";
import usuariosRouter from "./usuariosRoutes.js";
import citasRouter from "./citasRoutes.js";
import paymentsRouter from "./../routes/paymentsRoutes.js";
import pagosClientesRouter from "./pagosClienteRoutes.js";
// import reviewsRouter from "./reviewsRoutes.js";
// import dashboardRouter from './dashboardRoutes.js'

const router = Router();

router.use("/abogados", abogadosRouter);
router.use("/clientes", clientesRoutes);
router.use("/consultas", consultaRouter);
router.use("/tiposdecasos", tipoDeCasosRouter);
router.use("/casos", casosRouter);
router.use("/login", loginRouter);
router.use("/usuarios", usuariosRouter);
router.use("/citas", citasRouter);
router.use("/pagos", paymentsRouter);
// router.use("/reviews", reviewsRouter);
router.use("/pagosClientes", pagosClientesRouter);
// router.use("/dashboard", dashboardRouter)

export default router;
