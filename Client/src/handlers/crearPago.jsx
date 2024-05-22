import axios from "axios";

export async function crearPago(data) {
  const { description, quantity, unit_price } = data;
  console.log("data del post pago:", data);

  const URL = "/pagos/crearorden";
  try {
   const response = await axios.post(URL, {
      description: description,
      quantity: quantity,
      unit_price: unit_price,
   });
    console.log('Response handler crear pago: ', response)
    return response.data;
    // window.alert("Se ha registrado el usuario con éxito.");
  } catch (error) {
    window.alert("No fue posible registrar el pago.");
  }
}
