/**
 * Controller of area model
 */

 const typeId = require('../models/typeId');

 var controller = {
     list: (_, res) => {
         return typeId.findAll({})
             .then(typeId => res.status(200).send(typeId))
             .catch(error => res.status(400).send(error));
     }
 };
 
 module.exports = controller;