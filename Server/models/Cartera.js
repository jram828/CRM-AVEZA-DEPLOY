const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Cartera",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      estado_deuda: { type: DataTypes.STRING, allowNull: false },
      valor_deuda: { type: DataTypes.BIGINT, allowNull: false },
    },
    { timestamps: false }
  );
};
