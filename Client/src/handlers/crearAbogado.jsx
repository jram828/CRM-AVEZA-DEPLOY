import axios from 'axios';



export async function postAbogado(data) {
  const {
    cedulaAbogado,
    matricula,
   nombre,
   apellido,
   correo,
   password,
   telefono,
   calle,
   numero,
   codigoPostal,
   ciudad,
   pais
    } = data;
console.log("data del post", data)

  const URL = 'https://legaltech-develop.onrender.com/abogados';
  try {
    await axios.post(URL, {
      correo: `${correo}`,
      password:`${password}`,
      nombre: `${nombre}`,
      apellido: `${apellido}`,
      cedulaAbogado: `${cedulaAbogado}`,
      matricula: `${matricula}`,
      telefono: `${telefono}`,
      calle: `${calle}`,
      ciudad: `${ciudad}`,
      numero: `${numero}`,
      codigoPostal: `${codigoPostal}`,
      pais: `${pais}`,
    });
    window.alert("Se ha registrado el abogado con éxito.");
  } catch (error) {
    window.alert("No fue posible registrar el abogado.");
  }

}
