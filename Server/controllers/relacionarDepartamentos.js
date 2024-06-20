import { models } from "../../Server/DB.js";
import { codigoCiudades } from "../utils/codigoCiudades.js";
import { codigoDepartamentos } from "../utils/codigoDepartamentos.js";

const { Departamento } = models;


export const relacionarDepartamentos = async (req, res) => {
  // const { codigos, codigos_departamentos } = req.body;
  //  codigoPaises, codigoCiudades,

  // console.log("Codigos ciudades: ", codigosDepartamentos);
  try {
    for (let i = 0; i < codigoDepartamentos.length; i++) {
      var newDepartamento = await Departamento.create({
        codigo_departamento: codigoDepartamentos[i].codigo_departamento,
        nombre_departamento: codigoDepartamentos[i].nombre_departamento,
        codigo_pais: 169,
      });
      let newCodes = codigoCiudades.filter(
        (ciudad) =>
          ciudad.codigo_departamento === codigoDepartamentos[i].codigo_departamento
      );
      newDepartamento.addCiudad(
        newCodes
          .map((ciudad) => ciudad.codigo_ciudad)
          .map((codigo) => Number(codigo))
      );
    }

    return res.status(200).json(newDepartamento);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};