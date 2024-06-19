import { DataTypes } from "sequelize";

export default (sequelize) => {
  const DocumentosLegales=sequelize.define(
    "DocumentosLegales",
    {
      tipo_documento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      descripcion: { type: DataTypes.STRING, allowNull: false },
    },
    { timestamps: false }
  );
  return DocumentosLegales;
};

// const { DataTypes } = require("sequelize");

// module.exports = (sequelize) => {
//   sequelize.define("DocumentoLegal", {
//     urlDocumento: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   });
// };
