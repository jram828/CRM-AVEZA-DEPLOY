import { models } from "../../DB.js";

const { Cliente } = models;

const actualizaCliente = async (
  cedulaCliente,
  nombres,
  apellidos,
  email,
  celular,
  direccion,
  valor_pretensiones,
  aceptacion_cotizacion,
  tiene_contrato,
  honorarios,
  forma_de_pago,
  comentarios,
  // password,
) => {
  // console.log('imagen',imagen)

  const [updateCount, updateClient] = await Cliente.update(
    {
      nombres: nombres,
      apellidos: apellidos,
      email: email,
      celular: celular,
      direccion: direccion,
      numero: numero,
      valor_pretensiones: valor_pretensiones,
      aceptacion_cotizacion: aceptacion_cotizacion,
      tiene_contrato: tiene_contrato,
      honorarios: honorarios,
      forma_de_pago: forma_de_pago,
      comentarios: comentarios
      // password: password,
    },
    {
      where: {
        cedulaCliente: cedulaCliente,
      },
    }
  );

  if (updateCount > 0) {
    return "Actualizado";
  } else {
    return "";
  }

  // return await Abogado.create({nombre, duracion,dificultad, temporada}); //?ASI También puede ser
};
export { actualizaCliente };
