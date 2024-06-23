import { models } from "../../DB.js";
import {codigoCiudades} from "../../utils/codigoCiudades.js";
import { sendEmailCliente } from "../../utils/emailNotifier.js";

const { Cliente, Ciudad, TipoDeCaso, TipoUsuario } = models;
const createClienteBd = async (
  email,
  nombres,
  apellidos,
  cedulaCliente,
  celular,
  direccion,
  nombre_ciudad,
  tipo_usuario,
  tipo_de_caso,
  forma_de_pago,
  honorarios,
  cuotas,
  comentarios,
  valor_pretensiones
) => {
  const ciudadfilter = codigoCiudades.filter(
    (ciudad) => ciudad.nombre_ciudad === nombre_ciudad.toUpperCase()
  );
  console.log("Ciudad filter:", ciudadfilter);

  const codigo_ciudad = ciudadfilter[0].codigo_ciudad;
  console.log("Codigo ciudad:", codigo_ciudad);

  console.log("ciudad:", ciudadfilter);
  console.log("Body:", {
    email,
    nombres,
    apellidos,
    cedulaCliente,
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
    !cedulaCliente ||
    !celular ||
    nombres.length === 0 ||
    email.length === 0 ||
    cedulaCliente.length === 0 ||
    celular.length === 0
  ) {
    console.log("Faltan datos.");
    // res.status(400).send("Faltan datos");
    return "Faltan datos";
  } else {
    try {
      const newCliente = await Cliente.create({
        cedulaCliente: cedulaCliente,
        email: email,
        nombres: nombres,
        apellidos: apellidos,
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

      // if (newCliente) sendEmailCliente(newCliente);
      console.log(newCliente);
      return {
        ...newCliente.toJSON(),
      };
    } catch (error) {
      console.log(error);
      // res.status(500).send(error.message);
      return error.message
    }
  }
};

export { createClienteBd };
