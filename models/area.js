/**
 * Area model definition
 */
 const { DataTypes } = require("sequelize");
 var sequelize = require('../connect');
 
 const area = sequelize.define('areas', {
     id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         allowNull: false
     },
     name: {
         type: DataTypes.TEXT,
         allowNull: false
     }
 },{
     timestamps: false
 });
 
 module.exports = area;