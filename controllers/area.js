/**
 * Controller of area model
 */

 const area = require('../models/area');

 var controller = {
     list: (_, res) => {
         return area.findAll({})
             .then(area => res.status(200).send(area))
             .catch(error => res.status(400).send(error));
     }
 };
 
 module.exports = controller;