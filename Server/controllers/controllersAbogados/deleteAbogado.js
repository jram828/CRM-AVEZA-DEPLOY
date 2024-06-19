import  { models }  from "../../DB.js";

const Abogado=models.Abogado

const deleteAbogado = async (cedulaAbogado) => {
  await Abogado.update(
    {
      activo: false,
    },
    {
      where: {
        cedulaAbogado: cedulaAbogado,
      },
    },
  );
  return "Delete complete";
};

export  {
  deleteAbogado,
};
