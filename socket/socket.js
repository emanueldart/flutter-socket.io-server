const {io}= require("../index");


// mensajes de sockets
io.on('connection',client =>{
    console.log("cliente conectado");
    client.on("disconnect",()=> {
        console.log('cliente desconectado');
    });
    client.on('mensaje',(payload)=>{
        console.log('mensjaeee!',payload);

        //con io emito el servido emite un mensaje a todos los clientes conectados
        io.emit("mensaje",{admin:"nuevo mensaje"});
    });
});

