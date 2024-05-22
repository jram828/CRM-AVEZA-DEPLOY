import axios from "axios";

export async function postCliente(userDataCreate) {
  const {
      cedulaCliente,
      nombre,
      apellido,
      correo,
      password,
      telefono,
      calle,
      numero,
      codigoPostal,
      ciudad,
      pais,
    } = userDataCreate;

  console.log("User data registro:", userDataCreate);
  

  const URL = "https://legaltech-develop.onrender.com/clientes";
  try {
    await axios.post(URL, {
      cedulaCliente: `${cedulaCliente}`,
      nombre: `${nombre}`,
      apellido: `${apellido}`,
      correo: `${correo}`,
      password: `${password}`,
      telefono: `${telefono}`,
      calle: `${calle}`,
      numero: `${numero}`,
      ciudad: `${ciudad}`,
      codigoPostal: `${codigoPostal}`,
      pais: `${pais}`,
    });
    window.alert("Se ha registrado el cliente con éxito.");
  } catch (error) {
    window.alert("No fue posible registrar el cliente.");
  }
}
