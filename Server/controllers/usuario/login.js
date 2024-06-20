 import { models } from "../../DB.js";
 const { Cliente, Abogado, Usuario } = models
const getLogin = async (cedula,password) => {
  // if (rol === "Administrador") {
    const login = await Usuario.findOne({
      where: {
        cedula:cedula,
        password: password,
        // administrador: true,
      },
    });
  //   if (login) {
     console.log('Usuario encontrado:',login)
      return {
        access: true,
        usuario: login,
      };
  //   } else {
  //     return {
  //       access: false,
  //     };
  //   }
  // } else {
  //   const login = await Cliente.findOne({
  //     where: {
  //       correo: email,
  //       password: password,
  //     },
  //   });
  //   if (!login) {
  //     const login = await Abogado.findOne({
  //       where: {
  //         correo: email,
  //         password: password,
  //       },
  //     });
  //     if (!login) throw new Error("Password o email inválido");
  //     return {
  //       access: true,
  //       usuario: login,
  //     };
  //   }
  //   return {
  //     access: true,
  //     usuario: login,
  //   };
  // }
};

export {
  getLogin,
};
