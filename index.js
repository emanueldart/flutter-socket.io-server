const express= require('express');
//app de express
const app = express();

const path = require('path');
require('dotenv').config();

//creo el servidor de soquet
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);


//llamo a socket
require("./socket/socket");



// path publico 
const publicPath = path.resolve(__dirname,'public');
app.use( express.static(publicPath));

server.listen( process.env.PORT, (err)=>{
    if (err) throw new Error(err);
    console.log('Servidor corriendo en puerto!',process.env.PORT);
});