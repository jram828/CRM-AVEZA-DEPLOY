const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define(
     "Usuario",
     {
       cedula: {
         type: DataTypes.BIGINT,
         allowNull: false,
         primaryKey: true,
       },
       password: { type: DataTypes.STRING,
         allowNull: false, },
       email: {
         type: DataTypes.STRING,
         allowNull: false,
       },
      //  tipo_usuario: { type: DataTypes.STRING, allowNull: false, },
       nombres: { type: DataTypes.STRING, allowNull: false },
       apellidos: { type: DataTypes.STRING, allowNull: false },
       direccion: { type: DataTypes.STRING, allowNull: false },
      //  nombre_ciudad: { type: DataTypes.STRING, allowNull: false },
       celular: { type: DataTypes.BIGINT, allowNull: false},
     },
     { timestamps: false }
   );
};