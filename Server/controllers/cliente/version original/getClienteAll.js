const axios = require("axios");
// const mySql = require("mysql");
const {
  Usuario,
  Ciudad,
  Cliente,
  Pais,
  Departamento,
  TipoUsuario,
  TipoDeCaso,
} = require("../../DB_conn");

const getClienteAll = async (req, res) => {
  try {
    const foundClientes = await Cliente.findAll({
      include: [
        {
          model: Ciudad,
          attributes: ["nombre_ciudad"],
          through: { attributes: [] },
          include: [
            {
              model: Departamento,
              attributes: ["nombre_departamento"],
              through: { attributes: [] },
              include: [
                {
                  model: Pais,
                  attributes: ["nombre_pais"],
                  through: { attributes: [] },
                },
              ],
            },
          ],
        },
        {
          model: TipoUsuario,
          attributes: ["descripcion"],
          through: { attributes: [] },
        },
        {
          model: TipoDeCaso,
          attributes: ["descripcion"],
          through: { attributes: [] },
        },
      ],
    });
    // const foundClientes = await Usuario.findAll();
    // {
    //   include: [
    //     {
    //       model: Ciudad,
    //       attributes: ["nombre_ciudad"],
    //       through: { attributes: [] },
    //     },
    //   ],
    // }
    // const foundClientes = await Usuario.findAll();
    console.log("Found clientes:", foundClientes);
    const clientes = foundClientes.map((cliente) => {
      return cliente.datavalues;
    });

    console.log("Clientes GetAll:", clientes);
    res.status(200).json(foundClientes);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = getClienteAll;

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
