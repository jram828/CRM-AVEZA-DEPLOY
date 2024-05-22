import axios from "axios";

export async function postCaso(data) {
  const {
    cedulaAbogado,
    cedulaCliente,
    fecha,
    fechaFin,
    descripcion,
    TipoDeCasoId,
  } = data;
  console.log("data del post", data);

  const URL = "/casos";
  try {
    await axios.post(URL, {
      cedulaCliente: `${cedulaCliente}`,
      cedulaAbogado: `${cedulaAbogado}`,
      fecha: `${fecha}`,
      fechaFin: `${fechaFin}`,
      descripcion: `${descripcion}`,
      TipoDeCasoId: `${TipoDeCasoId}`,
    });
    window.alert("Se ha registrado el caso con éxito.");
  } catch (error) {
    window.alert("No fue posible registrar el caso.");
  }
}
