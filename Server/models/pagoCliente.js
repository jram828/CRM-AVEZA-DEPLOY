import { DataTypes } from "sequelize";

export default (sequelize) => {
  const PagosCliente = sequelize.define("PagosCliente", {
    idCaso: {
      type: DataTypes.BIGINT,
      allowNull: false,
      // primaryKey: true,
    },

    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    fechaDeAprobacion: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    pagoId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },

    orderId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },

    tipoDePago: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    estado: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    importeDeLaTransaccion: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });
  return PagosCliente;
};
