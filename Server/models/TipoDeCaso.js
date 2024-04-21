const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "TipoDeCaso",
    {
      tipo_caso: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      descripcion: { type: DataTypes.STRING, allowNull: false },
    },
    { timestamps: false }
  );
};
