import { models } from "../../DB.js";

const { Abogado } = models;

const actualizaAbogado = async (
  cedulaAbogado,
  matricula,
  nombre,
  apellido,
  correo,
  telefono,
  calle,
  numero,
  codigoPostal,
  ciudad,
  pais,
  imagen,
  password,
  administrador,
) => {
  // console.log('imagen',imagen)

  const [updateCount, updateAbogado] = await Abogado.update(
    {
      cedulaAbogado,
      matricula,
      nombre,
      apellido,
      correo,
      telefono,
      calle,
      numero,
      codigoPostal,
      ciudad,
      pais,
      imagen,
      password,
      administrador,
    },
    {
      where: {
        cedulaAbogado: cedulaAbogado,
      },
    },
  );

  if (updateCount > 0) {
    return "Actualizado";
  } else {
    return "";
  }
};
export { actualizaAbogado };
