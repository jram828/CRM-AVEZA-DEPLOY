const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Contrato', {
        archivo:{
            type: DataTypes.STRING,
            unique: true
        }
    })
}