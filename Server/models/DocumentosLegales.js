const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
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