const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Abogado", {
    cedulaAbogado: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    matricula: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100],
      },
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100],
      },
    },
    correo: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        len: [1, 100],
      },
    },
    telefono: {
      type: DataTypes.STRING,
      unique: false,
      validate: {
        len: [1, 50],
      },
    },
    calle: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 100],
      },
    },
    numero: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    codigoPostal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ciudad: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100],
      },
    },
    pais: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100],
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    activo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    administrador: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
};
