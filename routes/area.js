/**
 * Route employee definition 
 */

var express = require('express');
var areaController = require('../controllers/area');

var router = express.Router();

router.get('/list', areaController.list);

module.exports = router;