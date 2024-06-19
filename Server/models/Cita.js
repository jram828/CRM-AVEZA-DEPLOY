import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Cita=sequelize.define(
    "Cita",
    {
      idCita: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      titulo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 20],
        },
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 200],
        },
      },
      fechaCita: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      horaCita: {
        type: DataTypes.TIME,
      },
      completada: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    { timestamps: false }
  );
  return Cita;
};
