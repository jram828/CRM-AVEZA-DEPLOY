import { models } from "../../DB.js";
import { sendEmailPassword } from "../../utils/emailNotifier.js";

const { Cliente, Abogado } = models;

const getPassword = async (email) => {
  console.log('Email get password: ',email)
  const user = await Abogado.findOne({
    where: {
      correo: email,
    },
  });
  console.log("Password cliente: ", user.password);
  if (!user) {
    const user = await Cliente.findOne({
      where: {
        correo: email,
      },
    });
    // console.log("Password abogado: ", user.password);
    if (!user) throw new Error("Usuario no encontrado");
    sendEmailPassword(user.nombre, user.correo,user.password);
    return user
  }
  sendEmailPassword(user.nombre, user.correo, user.password);
  return user;
};

export { getPassword };
