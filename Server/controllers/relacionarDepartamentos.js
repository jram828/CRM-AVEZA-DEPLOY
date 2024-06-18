const { Pais, Departamento, Ciudad } = require("../DB_conn");
const departamentos = require("../utils/codigoDepartamentos");
const ciudades = require("../utils/codigoCiudades");

const relacionarDepartamentos = async (req, res) => {
  // const { codigos, codigos_departamentos } = req.body;
  //  codigoPaises, codigoCiudades,

  // console.log("Codigos ciudades: ", codigosDepartamentos);
  try {
    for (let i = 0; i < departamentos.length; i++){
    var newDepartamento = await Departamento.create({
      codigo_departamento: departamentos[i].codigo_departamento,
      nombre_departamento: departamentos[i].nombre_departamento,
      codigo_pais: 169,
    });
          let newCodes = ciudades.filter(
            (ciudad) =>
              ciudad.codigo_departamento ===
              departamentos[i].codigo_departamento
          );
    newDepartamento.addCiudad(newCodes.map((ciudad)=>ciudad.codigo_ciudad).map((codigo)=>Number(codigo)));
    }

    return res.status(200).json(newDepartamento);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

module.exports = relacionarDepartamentos;
