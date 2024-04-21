const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Pais",
    {
      codigo_pais: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nombre_pais: { type: DataTypes.STRING, allowNull: false },
    },
    { timestamps: false },
  );
};
