
 import {models} from '../../DB.js'
 const { Usuario } = models;
const crearUsuario = async (correo, password, imagen,rol) => {
  const newUsuario = await Usuario.create({
    correo,
    password,
    imagen,
    rol
  });
  console.log(newUsuario);
  return {
    ...newUsuario.toJSON(),
  };
};

export {
  crearUsuario,
};
