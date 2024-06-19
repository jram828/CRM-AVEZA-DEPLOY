import {models} from '../../DB.js'
import { sendEmailCliente} from "../../utils/emailNotifier.js";

const { Cliente } = models;
const createClienteBd = async (
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
  imagen,
  password,
) => {
  const newCliente = await Cliente.create({
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
    imagen,
    password,
  });
  if(newCliente) sendEmailCliente(newCliente)
  console.log(newCliente);
  return {
    ...newCliente.toJSON(),
  };
};

export {
  createClienteBd,
};
