const axios = require("axios");
// const mySql = require("mysql");
const { Cliente } = require("../../DB_conn");
const { useParams } = require("react-router-dom");

const getCliente = async (req, res) => {
  const cedula = req.params.id;
  console.log("Body get cliente:", cedula);
  try {
    const foundUser = await Cliente.findAll({
      where: { cedula: cedula },
    });
    console.log("Usuario getCliente:", foundUser);
    res.status(200).json(foundUser);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = getCliente;

//MySQL
// const axios = require("axios");
// const mySql = require("mysql");

// const getCliente = async (req, res) => {
//   try {
//     const conexion = mySql.createConnection({
//       host: "localhost",
//       database: "crm_aveza",
//       user: "root",
//       password: "",
//     });

//     const doQuery = (query) => {
//       return new Promise((resolve, reject) => {
//         conexion.query(query, (error, results, fields) => {
//           if (error) return reject(error);
//           console.log("Consulta correcta");
//           return resolve(results);
//         });
//       });
//     };

//     const selectAllQuery = "select * from tbl_registro_cliente";

//     // realizo mi consulta aquí y el resultado lo almaceno en una variable
//     const clientes = await doQuery(selectAllQuery);
//     res.status(200).json(clientes);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports = getCliente;
