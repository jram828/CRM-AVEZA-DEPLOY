const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('Usuario',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        correo:{
            type: DataTypes.STRING,
            unique: true,
            validate:{
                len: [1,50]
            }
        },
        password:{
            type: DataTypes.STRING,
            // unique: true,
            validate:{
                len: [1,10]
            }
        },
        imagen:{
            type: DataTypes.STRING,
            unique: true,
            validate:{
                len: [1,255]
            }
        },
        rol: {
            type: DataTypes.ENUM('Abogado', 'Administrador', 'Cliente'),
            allowNull: false // Si el campo no puede ser nulo
          },
        activo:{
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    })
}