import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Pais=sequelize.define(
    "Pais",
    {
      codigo_pais: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nombre_pais: { type: DataTypes.STRING, allowNull: false },
    },
    { timestamps: false }
  );
  return Pais;
};
