import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Abogado=sequelize.define("Abogado", {
    cedulaAbogado: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    tarjetaProf: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    apellidos: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100],
      },
    },
    nombres: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100],
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        len: [1, 100],
      },
    },
    celular: {
      type: DataTypes.STRING,
      unique: false,
      validate: {
        len: [1, 50],
      },
    },
    direccion: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 100],
      },
    },
    // password: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    activo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    administrador: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
  return Abogado;
};
