const { Cliente, Ciudad, TipoDeCaso, TipoUsuario } = require("../DB_conn");
const codigoCiudades = require("../utils/codigoCiudades");
const tipoUsuarios = require("../utils/tipoUsuarios");
const tipoDeCasos = require("../utils/tipoDeCasos");

const postCliente = async (req, res) => {
  const {
    email,
    nombres,
    apellidos,
    cedula,
    celular,
    direccion,
    nombre_ciudad,
    tipo_usuario,
    tipo_de_caso,
    forma_de_pago,
    honorarios,
    cuotas,
    comentarios,
    valor_pretensiones,
  } = req.body;
   
//   for (let i = 0; i < tipoUsuarios.length; i++){
//     var newTipoUsuario = await TipoUsuario.create({
//       tipo_usuario: tipoUsuarios[i].tipo_usuario,
//       descripcion: tipoUsuarios[i].descripcion,
//     });
//   }
// console.log("Tipo usuario: ",newTipoUsuario);
//     for (let i = 0; i < tipoDeCasos.length; i++) {
//       var newTipoCaso = await TipoDeCaso.create({
//         tipo_caso: tipoDeCasos[i].tipo_caso,
//         descripcion: tipoDeCasos[i].descripcion,
//       });
//   }
  
  // console.log('Tipo de caso: ',newTipoCaso);

  const ciudad= codigoCiudades.filter((ciudad)=>ciudad.nombre_ciudad===nombre_ciudad.toUpperCase())
  // const codigo_ciudad = ciudad[0].codigo_ciudad
  console.log('Codigo ciudad:',ciudad)
  console.log("Body:", {
    email,
    nombres,
    apellidos,
    cedula,
    celular,
    direccion,
    nombre_ciudad,
    tipo_usuario,
    tipo_de_caso,
    forma_de_pago,
    honorarios,
    cuotas,
    comentarios,
    valor_pretensiones,
  });
  if (
    !email ||
    !nombres ||
    !apellidos ||
    !cedula ||
    !celular ||
    nombres.length === 0 ||
    email.length === 0 ||
    cedula.length === 0 ||
    celular.length === 0
  ) {
    console.log('Faltan datos.')
    res.status(400).send("Faltan datos");
  } else {
    try {
      const newCliente = await Cliente.create({
          email: email,
          nombres: nombres,
          apellidos: apellidos,
          cedula: cedula,
          celular: celular,
          direccion: direccion,
          forma_de_pago: forma_de_pago,
          honorarios: honorarios,
          cuotas: cuotas,
          comentarios: comentarios,
          valor_pretensiones: valor_pretensiones,
      });
      
      newCliente.addCiudad(codigo_ciudad);
      newCliente.addTipoDeCaso(tipo_de_caso);
      newCliente.addTipoUsuario(tipo_usuario);

      return res.status(200).json(newCliente);
    } catch (error) {
      console.log(error);
      res.status(500).send(error.message);
    }
  }
};

module.exports = postCliente;
