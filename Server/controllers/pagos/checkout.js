// const stripe = require("stripe");

// require("dotenv").config();
// const { SECRETKEY } = process.env;

// client = new stripe(`${SECRETKEY}`);
// const Checkout = async (body) => {
//   const items = req.body.items;

//   let arrayItems = [];
//   items.array.forEach((item) => {
//     arrayItems.push({ price: item.id, quantity: item.quantity });
//   });

//   const session = await stripe.checkout.sessions.create({
//     line_items: arrayItems,
//     mode: payment,
//     success_url:
//       "https://proyecto-final-develop.vercel.app/#/home/payments/status",
//     cancel_url:'https://proyecto-final-develop.vercel.app/#/home/payments/status'
//   });
//   console.log("Body failure controller: ", body);
//   return {url:session.url};
// };

// module.exports = {
//   Checkout,
// };
