import { deleteAbogado } from "../controllers/controllersAbogados/deleteAbogado.js";
import { getAbogadoById } from "../controllers/controllersAbogados/getAbogadoById.js";
import { getAllAbogados } from "../controllers/controllersAbogados/getAllAbogados.js";
import { createAbogadoBd } from "../controllers/controllersAbogados/postAbogadosController.js";
import { actualizaAbogado } from "../controllers/controllersAbogados/postActualizaAbogado.js";

const getAbogadosHandler = async (req, res) => {
  try {
    const response = await getAllAbogados(req.query);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

// Creando Abogados
// todo esto a continuacion puedo enviarlo como un objeto para evitar errores, pero debo modificarlo en todos los modulos que esten
const postAbogadosHandler = async (req, res) => {
  const {
    cedulaAbogado,
    matricula,
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
    administrador,
  } = req.body;

  try {
    const response = await createAbogadoBd(
      cedulaAbogado,
      matricula,
      nombre,
      apellido,
      correo,
      telefono,
      calle,
      numero,
      codigoPostal,
      ciudad,
      pais,
      password,
      imagen,
      administrador,
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  // res.status(200).send(`creando actividades`);
};

const getAbogadoDetailHandler = async (req, res) => {
  const { cedulaAbogado } = req.query;
  try {
    const response = await getAbogadoById(cedulaAbogado);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json((error = error.message));
  }
};

const deleteAbogadoHandler = async (req, res) => {
  const { cedulaAbogado } = req.body;
  try {
    const response = await deleteAbogado(cedulaAbogado);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postActualizaAbogado = async (req, res) => {
  const {
    cedulaAbogado,
    matricula,
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
    administrador,
  } = req.body;

  try {
    const response = await actualizaAbogado(
      cedulaAbogado,
      matricula,
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
      administrador,
    );
    if (response) res.status(200).json(response);
    else res.status(204).json("No se actualizo el abogado");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export {
  getAbogadosHandler,
  getAbogadoDetailHandler,
  postAbogadosHandler,
  deleteAbogadoHandler,
  postActualizaAbogado,
};
