import { getAllReview } from "../controllers/reviewsControllers/getAllReview.js";
import { createReview } from "../controllers/reviewsControllers/postReview.js";

const getreviewsHandler = async (req, res) => {
  try {
    const response = await getAllReview(req.query);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postreviewsHandler = async (req, res) => {
  const { cedulaCliente, puntuacion, comentario } = req.body;
  try {
    const response = await createReview(cedulaCliente, puntuacion, comentario);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { getreviewsHandler, postreviewsHandler };
