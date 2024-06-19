// const { Checkout } = require('../controllers/pagos/checkout')

// const { obtenerPago } = require('../controllers/pagos/status')
// const { webhook } = require('../controllers/pagos/webhook')

// const getPaymentsHandler = async (req, res)=>{
//     try {
//         const { password, email } = req.query
//         const response = await getPayments(password, email)
//         res.status(200).json(response)
//     } catch (error) {
//         res.status(400).json({error:error.message})
//     }
// }

// const statusHandler = async (req, res) => {
//   try {
//     const { id } = req.body;
//     const response = await obtenerPago(id);
//     res.status(200).json(response);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// const webhookHandler = async (req, res) => {
//   try {
//     // const { password, email } = req.query;
//     console.log("Webhook mercado pago: ", req.body);
//     const response = await webhook(req.body);
    
//     res.status(200).json(response);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };


// const checkoutHandler = async (req, res) => {
//   try {
//     // const { password, email } = req.query;
//       const response = await Checkout(req.body);
//       console.log('response hander:',response)
//     res.status(200).json(response);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// module.exports = {
//   getPaymentsHandler,
//   checkoutHandler,
//   webhookHandler,
//   statusHandler,
// };