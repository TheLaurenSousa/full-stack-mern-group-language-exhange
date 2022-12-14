// Express
const express = require('express');
const app = express();

// Cors
const cors = require('cors');

// Dotenv
require('dotenv').config();

// Cookie Parser
const cookieParser = require('cookie-parser');
app.use(cookieParser());

require('./server/config/mongoose.config');
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./server/routes/users.routes')(app);

const port = 8000;
const server = app.listen(port, () => console.log(`Listening on port: ${port}`));

const io = require('socket.io')(server, {cors: true});
io.on("connection", socket => {
    socket.on("new_message", msg => {
        io.emit('new_message', msg);
    });
});