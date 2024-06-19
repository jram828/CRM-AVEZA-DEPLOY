 import {models} from "../../DB.js";

 const { Pagos } = models
const webhook = async (body) => {
  const newPago = "";
  console.log('Body webhook controller: ', body)
  return body;
};

export {
  webhook,
};
