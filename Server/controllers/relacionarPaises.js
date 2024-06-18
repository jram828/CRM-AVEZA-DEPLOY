const { Pais, Departamento, Ciudad } = require("../DB_conn");
const departamentos = require("../utils/codigoDepartamentos");

const relacionarPaises = async (req, res) => {
  // const { codigos, codigos_departamentos } = req.body;
  //  codigoPaises, codigoCiudades,
   const codigosDepartamentos = departamentos.map((departamento) => (departamento.codigo_departamento))
  console.log(
    "Codigos departamentos: ",
    codigosDepartamentos
  );
  try {
    const newPais = await Pais.create({
      codigo_pais: 169,
      nombre_pais: "COLOMBIA",
    });
    newPais.addDepartamento(codigosDepartamentos);
    return res.status(200).json(newPais);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

module.exports = relacionarPaises;