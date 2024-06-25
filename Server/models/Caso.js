import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Caso = sequelize.define(
    "Caso",
    {
      idCaso: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fecha: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      fechaFin: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1, 3000],
        },
      },
      valor_pretensiones: { type: DataTypes.BIGINT, allowNull: false },
      aceptacion_cotizacion: {
        type: DataTypes.STRING,
        defaultValue: "No",
      },
      honorarios: { type: DataTypes.BIGINT, allowNull: false },
      forma_de_pago: { type: DataTypes.STRING, allowNull: false },
      etapa: {
        type: DataTypes.STRING,
        defaultValue: "prospecto",
        // allowNull: false,
        validate: {
          len: [1, 100],
        },
      },
      tiene_contrato: {
        type: DataTypes.STRING,
        defaultValue: "No",
      },
    },
    { timestamps: false }
  );
  return Caso;
};

// const { DataTypes } = require("sequelize");

// module.exports = (sequelize) => {
//   sequelize.define(
//     "Caso",
//     {
//       numero_caso: {
//         type: DataTypes.BIGINT,
//         allowNull: false,
//         primaryKey: true,
//       },
//       descripcion: { type: DataTypes.STRING, allowNull: false },
//     },
//     { timestamps: false }
//   );
// };
