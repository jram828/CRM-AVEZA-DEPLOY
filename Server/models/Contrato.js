import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Contrato= sequelize.define("Contrato", {
    archivo: {
      type: DataTypes.STRING,
      unique: true,
    },
  });
    return Contrato;
};
