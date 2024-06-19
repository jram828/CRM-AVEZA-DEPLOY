import { DataTypes } from "sequelize";

export default (sequelize) => {
  const TipoUsuario=sequelize.define(
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
  return TipoUsuario;
};
