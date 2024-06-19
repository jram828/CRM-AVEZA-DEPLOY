import { crearOrden } from "../controllers/pagos/crearOrden.js";
import { failure } from "../controllers/pagos/failure.js";
import { getPayments } from "../controllers/pagos/getPayments.js";
import { pending } from "../controllers/pagos/pending.js";
import { obtenerPago } from "../controllers/pagos/status.js";
import { webhook } from "../controllers/pagos/webhook.js";

const getPaymentsHandler = async (req, res) => {
  try {
    const { password, email } = req.query;
    const response = await getPayments(password, email);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const statusHandler = async (req, res) => {
  try {
    const { id } = req.params;
    // const { id } = req.body;
    console.log("params status: ", req.params);
    console.log("Id status handler: ", id);
    const response = await obtenerPago(id);

    // console.log("Respuesta obtener pago handler:", response);

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const webhookHandler = async (req, res) => {
  try {
    // const { password, email } = req.query;
    console.log("Webhook mercado pago: ", req.body);
    const response = await webhook(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const failureHandler = async (req, res) => {
  try {
    const failureResponse = req.query;
    const response = await failure(failureResponse);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const pendingHandler = async (req, res) => {
  try {
    // const { password, email } = req.query;
    const response = await pending(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const crearOrdenHandler = async (req, res) => {
  try {
    // const { password, email } = req.query;
    console.log("Estoy en el handler");

    const response = await crearOrden(req.body);
    // console.log('response hander:',response)
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export {
  getPaymentsHandler,
  crearOrdenHandler,
  pendingHandler,
  failureHandler,
  statusHandler,
  webhookHandler,
};
