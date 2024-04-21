const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Departamento",
    {
      codigo_departamento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nombre_departamento: { type: DataTypes.STRING, allowNull: false },
      codigo_pais: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
