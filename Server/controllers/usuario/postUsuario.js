import { models } from "../../DB.js";
const { Usuario } = models;
const crearUsuario = async (
  email,
  password,
  nombres,
  apellidos,
  cedula,
  celular,
  direccion,
  nombre_ciudad,
  tipo_usuario
) => {
  if (
    !email ||
    !password ||
    !cedula ||
    password.length === 0 ||
    email.length === 0 ||
    cedula.length === 0
  ) {
    return ("Faltan datos");
  } else {
    try {
      const newUser = await Usuario.create({
        email: email,
        password: password,
        nombres: nombres,
        apellidos: apellidos,
        cedula: cedula,
        celular: celular,
        direccion: direccion,
      });
      // newUser.addCiudad(nombre_ciudad);
      // newUser.addTipoDeCaso(tipo_de_caso);
      // newUser.addTipoUsuario(tipo_usuario);
      console.log('Usuario creado:',newUser);
      return (newUser);
    } catch (error) {
      console.log(error);
      res.status(500).send(error.message);
    }
  }
};

export { crearUsuario };
