//import https from 'https';
//import fs from 'fs';
import express from "express";
import router from "./routes/index.js";
import morgan from "morgan";
import cors from "cors";

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use("/crmAveza", router);

export {
  server,
};

// "https://crm-aveza-prueba.vercel.app"
// server.use((req, res, next) => {
//   res.header(
//     "Access-Control-Allow-Origin","*"
//   );
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   next();
// });