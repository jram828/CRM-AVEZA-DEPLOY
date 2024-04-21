const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Cliente",
    {
      cedula: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      // password: { type: DataTypes.STRING, allowNull: false },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // tipo_usuario: { type: DataTypes.STRING, allowNull: false },
      // tipo_de_caso: { type: DataTypes.STRING, allowNull: true },
      nombres: { type: DataTypes.STRING, allowNull: false },
      apellidos: { type: DataTypes.STRING, allowNull: false },
      direccion: { type: DataTypes.STRING, allowNull: false },
      // codigo_ciudad: { type: DataTypes.INTEGER, allowNull: false },
      celular: { type: DataTypes.BIGINT, allowNull: false },
      valor_pretensiones: { type: DataTypes.BIGINT, allowNull: false },
      aceptacion_cotizacion: { type: DataTypes.STRING, allowNull: true },
      tiene_contrato: { type: DataTypes.STRING, allowNull: true },
      honorarios: { type: DataTypes.BIGINT, allowNull: false },
      forma_de_pago: { type: DataTypes.STRING, allowNull: false },
      comentarios: { type: DataTypes.STRING, allowNull: false},
    },
    { timestamps: false }
  );
};