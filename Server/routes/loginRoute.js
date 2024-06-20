import { Router } from "express";
import { loginHandler, loginHandlerGoogle, recoverPasswordHandler } from '../handlers/loginHandler.js'

const loginRouter = Router();

loginRouter.get("/", loginHandler);
loginRouter.get("/google", loginHandlerGoogle);
loginRouter.get("/password", recoverPasswordHandler);

export default loginRouter