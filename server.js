const express = require('express');
const cors = require('cors');
const app = express();
require('./server/config/mongoose.config');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./server/routes/chat.routes')(app);

const port = 8000;
const server = app.listen(port, () => console.log(`Listening on port: ${port}`));

const io = require('socket.io')(server, {cors: true});
io.on("connection", socket => {
    socket.on("new_message", msg => {
        io.emit('new_message', msg);
    });
});