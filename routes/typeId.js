/**
 * Route employee definition 
 */

var express = require('express');
var typeIdController = require('../controllers/typeId');

var router = express.Router();

router.get('/list', typeIdController.list);

module.exports = router;