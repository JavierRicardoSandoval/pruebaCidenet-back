/**
 * Employee model definition
 */
const { DataTypes } = require("sequelize");
var sequelize = require('../connect');

const employee = sequelize.define('employees', {
    id: {
        type: DataTypes.TEXT,
        primaryKey: true,
        allowNull: false
    },
    firstName: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    secondName: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    firstLastName: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    secondLastName: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    entryDate: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    registerDate: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    state: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    typeId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    areaId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    countryId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    timestamps: false
});

module.exports = employee;