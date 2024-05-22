import axios from 'axios';



export async function crearUsuario(data) {
  const {
      correo,
      password,
      imagen,
      rol
    } = data;
console.log("data del post", data)

  const URL = '/usuarios';
  try {
    await axios.post(URL, {
      correo: `${correo}`,
      password:`${password}`,
      imagen: `${imagen}`,
      rol: `${rol}`
    });
    window.alert("Se ha registrado el usuario con éxito.");
  } catch (error) {
    window.alert("No fue posible registrar el usuario.");
  }

}
