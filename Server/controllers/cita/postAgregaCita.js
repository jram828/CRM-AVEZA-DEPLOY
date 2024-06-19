import { models } from "../../DB.js";
import moment from "moment";
import { sendEmailCita } from "../../utils/emailNotifier.js";

const { Cita, Cliente, Abogado } = models;
const createCita = async (titulo, descripcion, fechaCita, horaCita, idCaso) => {
  const fechaUTC = moment(fechaCita).utc().toDate();

  const newCita = await Cita.create({
    titulo: titulo,
    descripcion: descripcion,
    fechaCita: fechaUTC,
    horaCita: horaCita,
    idCaso: idCaso,
  });
  const { cedulaCliente, cedulaAbogado } = await Caso.findOne(idCaso);

  if (cedulaCliente && cedulaAbogado) {
    const cliente = await Cliente.findOne(cedulaCliente);
    const abogado = await Abogado.findOne(cedulaAbogado);
    if (cliente && abogado) {
      sendEmailCita(cliente, abogado, newCita);
    }
  }

  //  newAbogado.addCliente(clientes);

  return newCita;

  // return await Abogado.create({nombre, duracion,dificultad, temporada}); //?ASI También puede ser
};

export { createCita };
