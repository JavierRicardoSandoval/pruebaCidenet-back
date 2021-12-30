/**
 * Area model definition
 */
 const { DataTypes } = require("sequelize");
 var sequelize = require('../connect');
 
 const types = sequelize.define('types', {
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
 
 module.exports = types;