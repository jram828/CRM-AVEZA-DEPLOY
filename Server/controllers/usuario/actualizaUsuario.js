import { models } from "../../DB.js";
const { Cliente } = models;

const actualizaCliente = async (
  cedulaCliente,
  nombre,
  apellido,
  correo,
  telefono,
  calle,
  numero,
  codigoPostal,
  ciudad,
  pais,
) => {
  // console.log('imagen',imagen)

  const [updateCount, updateClient] = await Cliente.update(
    {
      nombre: nombre,
      apellido: apellido,
      correo: correo,
      telefono: telefono,
      calle: calle,
      numero: numero,
      codigoPostal: codigoPostal,
      ciudad: ciudad,
      pais: pais,
    },
    {
      where: {
        cedulaCliente: cedulaCliente,
      },
    },
  );

  if (updateCount > 0) {
    return "Actualizado";
  } else {
    return "";
  }

  // return await Abogado.create({nombre, duracion,dificultad, temporada}); //?ASI También puede ser
};

export { actualizaCliente };
