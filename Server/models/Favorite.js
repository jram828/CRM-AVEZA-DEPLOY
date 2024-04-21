const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define(
     "Favorite",
     {
       id: {
         type: DataTypes.INTEGER,
           primaryKey: true,
         allowNull:false
       },
       name: {
         type: DataTypes.STRING,
         unique: true,
         allowNull: false,
       },
       species: { type: DataTypes.STRING,  allowNull: false },
        gender: {
           type: DataTypes.ENUM("Male", "Female", "unknown","Genderless"),
        allowNull:false},
       status: {
         type: DataTypes.ENUM("Alive", "Dead", "Unknown"),
         defaultValue: "Alive",
         allowNull: false,
       },
       image: {
         type: DataTypes.STRING,
         allowNull:false,
       }
     },
     { timestamps: false }
   );
};
