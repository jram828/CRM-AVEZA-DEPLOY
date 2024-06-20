import {models} from "../../DB.js";

 const { Cliente, Abogado } = models;
const getClientByEmail = async (email) => {
  const cliente = await Cliente.findOne({
    where: {
      email,
    },
  });

  if (!cliente) {
    const abogado = await Abogado.findOne({
      where: {
        email,
      },
    });
    return abogado;
  }

  return cliente;
};

export {
  getClientByEmail,
};
