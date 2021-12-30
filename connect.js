/**
 * Connection to database file
 */
const { Sequelize, Op, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db/app.db'
  });

  sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.log('Unable to connect to the database')
  })

  module.exports = sequelize;