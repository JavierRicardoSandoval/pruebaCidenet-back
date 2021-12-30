//Declarations
const express = require('express');
const bodyParser =  require('body-parser');
const cors = require('cors');
const employee_routes = require('./routes/employee');
const area_routes = require('./routes/area');
const typeId_routes = require('./routes/typeId');

//Using express
const app = express();


//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Enable cors to app
app.use(cors());


//Add prefix to routes
app.use('/api/employee', employee_routes);
app.use('/api/area', area_routes);
app.use('/api/typeId', typeId_routes);



module.exports = app;