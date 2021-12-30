/**
 * Route employee definition 
 */

var express = require('express');
var employeeController = require('../controllers/employee');

var router = express.Router();

router.post('/create', employeeController.create);
router.get('/list', employeeController.list);
router.get('/findById/:id', employeeController.findById);
router.get('/findByEmail/:email', employeeController.findByEmail);
router.put('/update/:id', employeeController.update);
router.delete('/delete/:id', employeeController.delete);

module.exports = router;