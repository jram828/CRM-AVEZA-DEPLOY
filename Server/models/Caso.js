const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Caso",
    {
      numero_caso: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      descripcion: { type: DataTypes.STRING, allowNull: false },
    },
    { timestamps: false }
  );
};
