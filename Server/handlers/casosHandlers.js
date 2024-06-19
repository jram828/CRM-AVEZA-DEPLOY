import { createCaso } from "../controllers/caso/postAgregaCaso.js";
import { getAllCaso } from "../controllers/caso/getAllCaso.js";
import { deleteCaso } from "../controllers/caso/deleteCaso.js";
import { getCasoId } from "../controllers/caso/getCasoById.js";

const createCasosHandler = async (req, res) => {
  const {
    cedulaCliente,
    cedulaAbogado,
    fecha,
    descripcion,
    TipoDeCasoid
  } = req.body;
  //const fecha_caso= new Date(fecha)
  console.log(
    "cedulaCliente",
    cedulaCliente,
    "cedulaAbogado",
    cedulaAbogado,
    "fecha",
    fecha,
    "descripcion",
    descripcion,
    "TipoDeCasoId",
    TipoDeCasoid
  );

  try {
    const response = await createCaso(
      parseInt(cedulaCliente),
      parseInt(cedulaAbogado),
      fecha,
      descripcion,
      TipoDeCasoid
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCasoHandler = async (req, res) => {
  try {
    const response = await getAllCaso(req);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getTipoDeCasoByIdHandler = async (req, res) => {
  console.log(req.params);
  const { idCaso } = req.params;
  try {
    const response = await getCasoId(idCaso);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

const deleteCasoHandler = async (req, res) => {
  const { idCaso, fechaFin } = req.body;

  try {
    const response = await deleteCaso(idCaso, fechaFin);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export  {
  createCasosHandler,
  getCasoHandler,
  deleteCasoHandler,
  getTipoDeCasoByIdHandler,
};
