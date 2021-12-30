/**
 * Primary file for the API
 */

//Dependencies
const app = require('./app');
const http = require('http');


//Initializing the server
const server = http.createServer(app);
app.set('port', process.env.PORT || 3000);


//Start the server
app.listen(app.get('port'), ()=>{
    console.log(`The server is running on port: ${app.get('port')}`);
});