import {models} from "../../DB.js";

 const { Cliente, Abogado } = models;
const getClientByEmail = async (correo) => {
  const cliente = await Cliente.findOne({
    where: {
      correo,
    },
  });

  if (!cliente) {
    const abogado = await Abogado.findOne({
      where: {
        correo,
      },
    });
    return abogado;
  }

  return cliente;
};

export {
  getClientByEmail,
};
