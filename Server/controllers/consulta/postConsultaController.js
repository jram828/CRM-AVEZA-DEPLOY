import { models } from "../DB.js";
const { Consulta } = models;
const { ACCOUNTSID, AUTHTOKEN, NUMBER, } = process.env;
import twilio from "twilio";

const createConsultaBd = async (

  nombre,
  apellido,
  correo,
  telefono,
  consulta
) => {
  console.log("Datos Crear consulta controller: ", {
    nombre,
    apellido,
    correo,
    telefono,
    consulta,
  });
  const newConsulta = await Consulta.create({
    nombre,
    apellido,
    correo,
    telefono,
    consulta,
  });
  const client = new twilio(ACCOUNTSID, AUTHTOKEN, NUMBER);
  const celular = "+573127461628";
  client.messages
    .create({
      body: "Se ha creado una nueva consulta en Legaltech!",
      from: "+12097210938",
      to: celular,
    })
    .then((message) => console.log(message.sid))
    .done();
  return newConsulta;
};

export { createConsultaBd };
