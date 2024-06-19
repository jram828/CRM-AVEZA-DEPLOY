import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Cotizacion=sequelize.define("Cotizacion", {
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    valor: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    fechaVigencia: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
    return Cotizacion;
};
