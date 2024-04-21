const { Pais, Departamento, Ciudad } = require("../DB_conn");
const ciudades = require("../utils/codigoCiudades");

const crearCiudades = async (req, res) => {
  try {
    for (let i = 0; i < ciudades.length; i++) {
      var newCiudad = await Ciudad.create({
        codigo_ciudad: ciudades[i].codigo_ciudad,
        nombre_ciudad: ciudades[i].nombre_ciudad,
        codigo_departamento: ciudades[i].codigo_departamento,
      });
    }
    console.log("Ultima ciudad: ", newCiudad);
    return res.status(200).json(newCiudad);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

module.exports = crearCiudades;
