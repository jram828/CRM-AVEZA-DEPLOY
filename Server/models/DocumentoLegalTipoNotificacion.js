const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('DocumentoLegalTipoNotificacion',{
        dia:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        vencido :{
            type: DataTypes.BOOLEAN,
        }
    })
}