import { models } from "../../DB.js";
const { Cliente } = models;
const deleteCliente = async (cedulaCliente) => {
  await Cliente.update(
    {
      activo: false,
    },
    {
      where: {
        cedulaCliente: cedulaCliente,
      },
    },
  );
  return "Delete complete";
};

export { deleteCliente };
