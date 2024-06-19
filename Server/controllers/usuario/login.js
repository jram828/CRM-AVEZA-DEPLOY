 import { models } from "../../DB.js";
 const { Cliente, Abogado, Usuario } = models
const getLogin = async (password, email, rol) => {
  if (rol === "Administrador") {
    const login = await Abogado.findOne({
      where: {
        correo: email,
        password: password,
        administrador: true,
      },
    });
    if (login) {
      return {
        access: true,
        usuario: login,
      };
    } else {
      return {
        access: false,
      };
    }
  } else {
    const login = await Cliente.findOne({
      where: {
        correo: email,
        password: password,
      },
    });
    if (!login) {
      const login = await Abogado.findOne({
        where: {
          correo: email,
          password: password,
        },
      });
      if (!login) throw new Error("Password o email inválido");
      return {
        access: true,
        usuario: login,
      };
    }
    return {
      access: true,
      usuario: login,
    };
  }
};

export {
  getLogin,
};
