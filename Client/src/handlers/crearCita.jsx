import axios from "axios";

export async function postCitaHandlers(data) {
  const {
    titulo,
    descripcion, 
    fechaCita, 
    horaCita,
    idCaso,
  } = data;
  console.log("data del post", data);

  const URL = "/citas";
  try {
    await axios.post('citas', {
      titulo: `${titulo}`,
      descripcion: `${descripcion}`,
      fechaCita: `${fechaCita}`,
      horaCita: `${horaCita}`,
      idCaso: `${idCaso}`,
    });
    window.alert("Se ha registrado la cita con éxito.");
  } catch (error) {
    window.alert("No fue posible registrar la cita.");
  }
}