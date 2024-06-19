 import {models} from "../../DB.js";
 const { Pagos } = models
const failure = async (body) => {

  const newPago = "";
  console.log("Body failure controller: ", body);
  return body;
};

export{
  failure,
};
