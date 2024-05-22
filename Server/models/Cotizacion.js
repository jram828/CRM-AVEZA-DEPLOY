const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Cotizacion',{
        fecha:{
            type: DataTypes.DATE,
            allowNull: false
        },
        valor:{
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        fechaVigencia:{
            type: DataTypes.DATE,
            allowNull: false
        }
    })
}