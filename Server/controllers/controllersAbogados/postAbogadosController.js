import { models } from "../../DB.js";
const {
  ACCOUNTSID,
  AUTHTOKEN,
  NUMBER,
} = process.env;
import twilio from "twilio";

const Abogado = models.Abogado

const createAbogadoBd = async (
  email,
  nombres,
  apellidos,
  cedulaAbogado,
  celular,
  direccion,
  nombre_ciudad,
  tarjetaProf,
  password
) => {
  // console.log('imagen',imagen)
  console.log(cedulaAbogado);
  console.log('Datos abogado:',{
    email,
    nombres,
    apellidos,
    cedulaAbogado,
    celular,
    direccion,
    nombre_ciudad,
    tarjetaProf,
    password}
  );
  try {
    const newAbogado = await Abogado.create({
      email,
      nombres,
      apellidos,
      cedulaAbogado,
      celular,
      direccion,
      nombre_ciudad,
      tarjetaProf,
      password,
    });

    // const client = new twilio(ACCOUNTSID, AUTHTOKEN, NUMBER);
    // const celular = "+573204746006";
    // client.messages
    //   .create({
    //     body: "Se ha creado un nuevo Abogado en Legaltech!",
    //     from: "+12097210938",
    //     to: celular,
    //   })
    //   .then((message) => console.log(message.sid))
    //   .done();
    return newAbogado;
  } catch (error) {
    console.log(error);
  }
};

export  { createAbogadoBd };
