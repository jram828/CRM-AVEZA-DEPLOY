const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('TipoNotificacion',{
        descripcion:{
            type: DataTypes.TEXT,
            allowNull: false,
            validate:{
                len:[1,50]
            }
        },
        termino:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        habilesCorridos:{
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    })
}