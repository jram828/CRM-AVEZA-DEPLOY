import { models } from "../../DB.js";
const Abogado=models.Abogado

const getAbogadoById = async (cedulaAbogado) => {
  console.log(cedulaAbogado);
  const abogado = await Abogado.findByPk(cedulaAbogado);
  if (!abogado) throw Error("Abogado no Registrado o no existe");
  return abogado;
};

export {
  getAbogadoById,
};
