import { getClienteById } from "../controllers/cliente/getClienteByid.js";
import { getAllCliente } from "../controllers/cliente/getAllClientes.js";
import { getClienteByName } from "../controllers/cliente/getClienteByName.js";
import { createClienteBd } from "../controllers/cliente/postClientesController.js";
import { eliminaCliente } from "../controllers/cliente/postEliminaCliente.js";
import {
  actualizaCliente,
} from "../controllers/cliente/postActualizaClientes.js";
import {
  getClientByEmail,
} from "../controllers/cliente/getClientByEmail.js";

const clientesHandler = async (req, res) => {
  //const { name } = req.query;
  console.log(req.query);
  const { pagina = 1, porPagina = 10 } = req.query;
  const offset = (parseInt(pagina) - 1) * parseInt(porPagina);

  try {
    const response = await getAllCliente(req.query);
    res.status(200).json(response);
    /*}  else {
            const countyByName = await getClienteByName(name)
            res.status(200).json(countyByName);
        } ;*/
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const clientesDetailHandler = async (req, res) => {
  const { cedulaCliente } = req.query;
  // res.status(200).send(`Detalle del Usuario ${id}`); //? esto fue de solo prueba de inicio 42:57

  try {
    const response = await getClienteById(cedulaCliente);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json((error = error.message));
  }
};

const getClientByEmailHandler = async (req, res) => {
  const { correo } = req.query;

  try {
    const response = await getClientByEmail(correo);
    console.log("Response by email:", response);
    res.status(200).json(response);
  } catch (error) {
    console.log("Error by email:", error.message);
    res.status(400).json({ error: error.message });
  }
};

const postClientesHandler = async (req, res) => {
  console.log("Body post cliente:", req.body);
  const {
    cedulaCliente,
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
  } = req.body;

  try {
    const response = await createClienteBd(
      cedulaCliente,
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
    );
    console.log("Response crear cliente", response);
    if (response) res.status(200).json(response);
    else res.status(200).send("La cedula ya existe");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  // res.status(200).send(`creando actividades`);
};

const postEliminaClientes = async (req, res) => {
  const { cedulaCliente } = req.body;

  try {
    const response = await eliminaCliente(cedulaCliente);
    if (response) res.status(200).json("Cliente eliminado");
    else res.status(204).json("No existe el cliente");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  // res.status(200).send(`creando actividades`);
};

const postActualizaClientes = async (req, res) => {
  const {
    cedulaCliente,
    nombre,
    apellido,
    correo,
    telefono,
    calle,
    numero,
    codigoPostal,
    ciudad,
    pais,
  } = req.body;

  try {
    const response = await actualizaCliente(
      cedulaCliente,
      nombre,
      apellido,
      correo,
      telefono,
      calle,
      numero,
      codigoPostal,
      ciudad,
      pais,
    );
    if (response) res.status(200).json(response);
    else res.status(204).json("No se actualizo el cliente");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  // res.status(200).send(`creando actividades`);
};
export  {
  clientesHandler,
  clientesDetailHandler,
  postClientesHandler,
  postEliminaClientes,
  postActualizaClientes,
  getClientByEmailHandler,
};
