const express = require("express");
const router = require("../Server/routes/clientes.route");
const server = express();
const PORT = 3001;
const { conn } = require("./DB_conn");

// "https://crm-aveza-prueba.vercel.app"
server.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin","*"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
server.use(express.json());
server.use("/crmAveza", router);

conn.sync({ alter:true}).then(() => {
  server.listen(PORT, () => {
    console.log("Server en puerto: " + PORT);
  });
});
