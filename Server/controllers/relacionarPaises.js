const { Pais, Departamento, Ciudad } = require("../DB_conn");

const relacionarPaises = async (req, res) => {
  const { codigos} = req.body;   //, codigos_departamentos 
  //  codigoPaises, codigoCiudades,
  const codigosDepartamentos = codigos.map((departamento) => (departamento.codigo_departamento))
  // for (let i = 0; i < codigos_departamentos.length; i++){
  //   let newCodes = codigos.filter(
  //     (ciudad) =>
  //       ciudad.codigo_departamento ===
  //       codigos_departamentos[0].codigo_departamento
  //   );
  // }
  // console.log(
  //   "Codigos ciudades: ",
  //   newCodes
  // );
  try {
    // for (let i = 0; i < codigos_departamentos.length; i++){
    // var newDepartamento = await Departamento.create({
    //   codigo_departamento: Number(codigos_departamentos[i].codigo_departamento),
    //   nombre_departamento: codigos_departamentos[i].nombre_departamento,
    //   codigo_pais: 169,
    // });
    //       let newCodes = codigos.filter(
    //         (ciudad) =>
    //           ciudad.codigo_departamento ===
    //           codigos_departamentos[i].codigo_departamento
    //       );
    // newDepartamento.addCiudad(newCodes.map((ciudad)=>ciudad.codigo_ciudad).map((codigo)=>Number(codigo)));
    // }
    const newPais = await Pais.create({
      codigo_pais: 169,
      nombre_pais: "COLOMBIA",
    });
    newPais.addDepartamento(codigosDepartamentos);
    // newUser.addTipoDeCaso(tipo_de_caso);
    // newUser.addTipoDeUsuario(tipo_usuario);
    return res.status(200).json(newPais);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

module.exports = relacionarPaises;