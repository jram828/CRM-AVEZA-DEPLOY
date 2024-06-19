import { models } from "../../DB.js";
const {
  ACCOUNTSID,
  AUTHTOKEN,
  NUMBER,
} = process.env;
import twilio from "twilio";

const Abogado = models.Abogado

const createAbogadoBd = async (
  cedulaAbogado,
  matricula,
  nombre,
  apellido,
  correo,
  telefono,
  calle,
  numero,
  codigoPostal,
  ciudad,
  pais,
  password,
  imagen,
  administrador,
) => {
  // console.log('imagen',imagen)
try{
  console.log(cedulaAbogado)
  console.log(matricula,
    nombre,
    apellido,
    correo,
    telefono,
    calle,
    numero,
    codigoPostal,
    ciudad,
    pais,
    password,
    imagen,
    administrador,)
  const newAbogado = await Abogado.create({
    cedulaAbogado: cedulaAbogado,
    matricula: matricula,
    nombre: nombre,
    apellido: apellido,
    correo: correo,
    telefono: telefono,
    calle: calle,
    numero: numero,
    codigoPostal: codigoPostal,
    ciudad: ciudad,
    pais: pais,
    password: password,
    imagen: imagen,
    administrador: administrador,
  });


        const client = new twilio(ACCOUNTSID, AUTHTOKEN, NUMBER);
  const celular = "+573127461628";
  client.messages
    .create({
      body: "Se ha creado un nuevo Abogado en Legaltech!",
      from: "+12097210938",
      to: celular,
    })
    .then((message) => console.log(message.sid))
    .done();
    return newAbogado;
  } catch(error){
    console.log(error)
  } 

  

};

export  { createAbogadoBd };
