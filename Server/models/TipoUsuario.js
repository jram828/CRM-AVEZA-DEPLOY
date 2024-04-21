const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "TipoUsuario",
    {
      tipo_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      descripcion: { type: DataTypes.STRING, allowNull: false },
    },
    { timestamps: false }
  );
};
