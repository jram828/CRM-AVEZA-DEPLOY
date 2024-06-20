import { models } from "../../DB.js";
import codigoCiudades from "../../utils/codigoCiudades.js";
import { sendEmailCliente } from "../../utils/emailNotifier.js";

const { Cliente } = models;
const createClienteBd = async (
  cedulaCliente,
  email,
  nombres,
  apellidos,
  direccion,
  celular,
  valor_pretensiones,
  honorarios,
  forma_de_pago,
  comentarios,
  cuotas,
  nombre_ciudad,
  tipo_usuario,
  tipo_de_caso
) => {
  const ciudadfilter = codigoCiudades.filter(
    (ciudad) => ciudad.nombre_ciudad === nombre_ciudad.toUpperCase()
  );
  const codigo_ciudad = ciudadfilter[0].codigo_ciudad;
  console.log("Codigo ciudad:", codigo_ciudad);

  console.log("ciudad:", ciudadfilter);
  console.log("Body:", {
    cedulaCliente,
    email,
    nombres,
    apellidos,
    direccion,
    celular,
    valor_pretensiones,
    honorarios,
    forma_de_pago,
    comentarios,
    cuotas,
    nombre_ciudad,
    tipo_usuario,
    tipo_de_caso,
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
    res.status(400).send("Faltan datos");
  } else {
    try {
      const newCliente = await Cliente.create({
        cedulaCliente: cedulaCliente,
        email: email,
        nombres: nombres,
        apellidos: apellidos,
        direccion: direccion,
        celular: celular,
        valor_pretensiones: valor_pretensiones,
        honorarios: honorarios,
        forma_de_pago: forma_de_pago,
        comentarios: comentarios,
        cuotas: cuotas,
      });

      newCliente.addCiudad(codigo_ciudad);
      newCliente.addTipoDeCaso(tipo_de_caso);
      newCliente.addTipoUsuario(tipo_usuario);

      if (newCliente) sendEmailCliente(newCliente);
      console.log(newCliente);
      return {
        ...newCliente.toJSON(),
      };
    } catch (error) {
      console.log(error);
      res.status(500).send(error.message);
    }
  }
};

export { createClienteBd };
