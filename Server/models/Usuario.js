import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Usuario = sequelize.define(
    "Usuario",
    {
      cedula: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      password: { type: DataTypes.STRING, allowNull: false },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      //  tipo_usuario: { type: DataTypes.STRING, allowNull: false, },
      nombres: { type: DataTypes.STRING, allowNull: false },
      apellidos: { type: DataTypes.STRING, allowNull: false },
      direccion: { type: DataTypes.STRING, allowNull: false },
      //  nombre_ciudad: { type: DataTypes.STRING, allowNull: false },
      celular: { type: DataTypes.BIGINT, allowNull: false },
      // rol: {
      //   type: DataTypes.ENUM("Abogado", "Administrador", "Cliente"),
      //   allowNull: false, // Si el campo no puede ser nulo
      // },
      activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
  return Usuario;
};

// const { DataTypes } = require("sequelize");

// module.exports = (sequelize) => {
//   sequelize.define("Usuario", {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     correo: {
//       type: DataTypes.STRING,
//       unique: true,
//       validate: {
//         len: [1, 50],
//       },
//     },
//     password: {
//       type: DataTypes.STRING,
//       // unique: true,
//       validate: {
//         len: [1, 10],
//       },
//     },
//     imagen: {
//       type: DataTypes.STRING,
//       unique: true,
//       validate: {
//         len: [1, 255],
//       },
//     },
//     rol: {
//       type: DataTypes.ENUM("Abogado", "Administrador", "Cliente"),
//       allowNull: false, // Si el campo no puede ser nulo
//     },
//     activo: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: true,
//     },
//   });
// };
