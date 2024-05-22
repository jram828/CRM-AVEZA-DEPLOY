const { DataTypes } = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('Caso',{
        idCaso: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fecha:{
            type: DataTypes.DATE,
            allowNull: false
        },
        fechaFin:{
            type: DataTypes.DATE,
            allowNull: true
        },
        descripcion:{
            type: DataTypes.TEXT,
            allowNull: false,
            validate:{
                len: [1,100]
            }
        }
    })
}

// const { DataTypes } = require("sequelize");

// module.exports = (sequelize) => {
//   sequelize.define(
//     "Caso",
//     {
//       numero_caso: {
//         type: DataTypes.BIGINT,
//         allowNull: false,
//         primaryKey: true,
//       },
//       descripcion: { type: DataTypes.STRING, allowNull: false },
//     },
//     { timestamps: false }
//   );
// };


