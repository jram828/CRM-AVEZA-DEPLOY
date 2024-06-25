import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Cliente = sequelize.define(
    "Cliente",
    {
      cedulaCliente: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nombres: { type: DataTypes.STRING, allowNull: false },
      apellidos: { type: DataTypes.STRING, allowNull: false },
      direccion: { type: DataTypes.STRING, allowNull: false },
      // codigo_ciudad: { type: DataTypes.INTEGER, allowNull: false },
      celular: { type: DataTypes.BIGINT, allowNull: false },
      // valor_pretensiones: { type: DataTypes.BIGINT, allowNull: false },
      // aceptacion_cotizacion: { type: DataTypes.STRING, allowNull: true },
      // honorarios: { type: DataTypes.BIGINT, allowNull: false },
      // forma_de_pago: { type: DataTypes.STRING, allowNull: false },
      // comentarios: { type: DataTypes.STRING, allowNull: false },
      activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
  return Cliente;
};

// const { DataTypes } = require("sequelize");

// module.exports = (sequelize) => {
//   sequelize.define("Cliente", {
//     cedulaCliente: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//     },
//     nombre: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         len: [1, 100],
//       },
//     },
//     apellido: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         len: [1, 100],
//       },
//     },
//     correo: {
//       type: DataTypes.STRING,
//       unique: true,
//       validate: {
//         len: [1, 100],
//       },
//     },
//     telefono: {
//       type: DataTypes.STRING,
//       unique: true,
//     },
//     calle: {
//       type: DataTypes.STRING,
//       validate: {
//         len: [1, 100],
//       },
//     },
//     numero: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     codigoPostal: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     ciudad: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         len: [1, 100],
//       },
//     },
//     pais: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         len: [1, 100],
//       },
//     },
//     activo: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: true,
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   });
// };
