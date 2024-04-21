const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Cita",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      fecha: { type: DataTypes.STRING, allowNull: false },
      hora: { type: DataTypes.STRING, allowNull: false },
    },
    { timestamps: false }
  );
};
