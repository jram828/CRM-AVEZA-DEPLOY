import { models } from "../../Server/DB.js";
import { codigoCiudades } from "../utils/codigoCiudades.js";
const {Ciudad } = models;




export const crearCiudades = async (req, res) => {
  try {
    for (let i = 0; i < codigoCiudades.length; i++) {
      var newCiudad = await Ciudad.create({
        codigo_ciudad: codigoCiudades[i].codigo_ciudad,
        nombre_ciudad: codigoCiudades[i].nombre_ciudad,
        codigo_departamento: codigoCiudades[i].codigo_departamento,
      });
    }
    console.log("Ultima ciudad: ", newCiudad);
    return res.status(200).json(newCiudad);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};
