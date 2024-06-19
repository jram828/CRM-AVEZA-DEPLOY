import { DataTypes } from "sequelize";

export default (sequelize) => {
  const DocumentoLegalTipoNotificacion=sequelize.define("DocumentoLegalTipoNotificacion", {
    dia: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    vencido: {
      type: DataTypes.BOOLEAN,
    },
  });
    return DocumentoLegalTipoNotificacion;
};
