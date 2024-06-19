import { getCasoxMes } from '../controllers/dashboard/dashboardGet.js'

const getCasoxMesHandler = async (req, res) => {
    try {
      const response = await getCasoxMes();
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  };

export { getCasoxMesHandler }
