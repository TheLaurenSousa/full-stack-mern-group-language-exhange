const express = require('express');
const app = express();

const server = app.listen(8000, () => 
    console.log("The server is all fired up on port 8000")
);

const io = require('socket.io')(server, {cors: true});

io.on("connection", socket => {
    socket.on("new_message", msg => {
        io.emit('new_message', msg);
    });
});