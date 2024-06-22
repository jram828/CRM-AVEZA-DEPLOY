import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Consulta = sequelize.define(
    "Consulta",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      apellido: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 20],
        },
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 20],
        },
      },
      correo: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 50],
        },
      },
      telefono: {
        type: DataTypes.BIGINT,
      },
      consulta: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1, 200],
        },
      },
      activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    }
  );
    return Consulta
};
