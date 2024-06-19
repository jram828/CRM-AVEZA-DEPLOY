 import {models} from "../../DB.js";
 const { TipoDeCaso } = models;
const deleteTipoDeCaso = async (TipoDeCasoid) => {
  await Caso.update(
    {
      activo: false,
    },
    {
      where: {
        TipoDeCasoid: TipoDeCasoid,
      },
    },
  );
  return JSON.stringify({ mensaje: "Se elimino el tipo de caso" });
};

export {
  deleteTipoDeCaso,
};
