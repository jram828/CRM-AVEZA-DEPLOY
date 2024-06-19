const mySql = require("mysql");

const login = async(req, res) => {
  const { usuario, password } = req.query;


  try {
    const conexion = mySql.createConnection({
      host: "localhost",
      database: "crm_aveza",
      user: "root",
      password: "",
    });
    
    const doQuery = (query) => {
      return new Promise((resolve, reject) => {
        conexion.query(query, (error, results, fields) => {
          if (error) return reject(error);
          console.log("Conexion exitosa a MySQL Login");
          return resolve(results);
        });
      });
    };
    
    const selectAllQuery = "select * from tbl_registro_cliente";
    
    // realizo mi consulta aquí y el resultado lo almaceno en una variable
    const clientes = await doQuery(selectAllQuery);
    const { cedula, contrasena } = clientes[0];

    // console.log("Cedula: ", cedula);
    // console.log("Contrasena: ", contrasena);
    // console.log("Usuario: ", usuario);
    // console.log("Password: ", password);

    if (cedula === Number(usuario) && contrasena === password) {
      return res.status(200).json({ access: true });
    } else {
      return res.status(400).json({ access: false });
    }
        
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};

module.exports = login;