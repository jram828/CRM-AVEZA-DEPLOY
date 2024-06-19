import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Ciudad=sequelize.define(
    "Ciudad",
    {
      codigo_ciudad: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      nombre_ciudad: { type: DataTypes.STRING, allowNull: false },
      codigo_departamento: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
  return Ciudad;
};
