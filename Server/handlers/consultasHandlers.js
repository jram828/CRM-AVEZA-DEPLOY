import { getAllConsulta } from "../controllers/consulta/getAllConsulta.js";
import { createConsultaBd } from "../controllers/consulta/postConsultaController.js";
import { deleteConsulta } from "../controllers/consulta/deleteConsulta.js";

const getConsultaHandler = async (req, res) => {
  try {
    const response = await getAllConsulta(req.query);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postConsultaHandler = async (req, res) => {
  const { nombre, apellido, correo, telefono, consulta } = req.body;

  console.log("Body crear consulta:", req.body);
  try {
    const response = await createConsultaBd(
      nombre,
      apellido,
      correo,
      telefono,
      consulta,
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteConsultaHandler = async (req, res) => {
  const { id } = req.body;
  try {
    const response = await deleteConsulta(correo);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { getConsultaHandler, postConsultaHandler, deleteConsultaHandler };
