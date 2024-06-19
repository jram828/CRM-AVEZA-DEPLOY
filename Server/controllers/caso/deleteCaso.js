import { models } from "../../DB.js";

const Caso=models.Caso
const deleteCaso = async (idCaso,fechaFin) => {
  await Caso.update(
    {
        fechaFin: fechaFin,
    },
    {
      where: {
        idCaso: idCaso,
      },
    }
  );
  return JSON.stringify({ mensaje: "Se agrego fecha de fin al caso" })
};

export {
  deleteCaso,
};