import { DataTypes } from "sequelize";

export default (sequelize) => {
  const DocumentoTemplate=sequelize.define("DocumentoTemplate", {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 20],
      },
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1, 100],
      },
    },
    urlTemplate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
    return DocumentoTemplate;
};
