const express = require('express');
const http = require('http');
const socket = require('socket.io');
const cors = require('cors');
const path = require('path')
const login = require('./login');


const app = express();
const server = http.createServer(app);
const io = socket(server);



app.use(cors());

app.use(express.static(path.join(__dirname, '../dist/client-chat')));

//app.use('/login', login);





server.listen(3000, () => console.log('listening at 3000'));


io.on('connection', (socket)=> {
    console.log('Connection made', socket.id);
    socket.on('chat', (data) => {
        io.sockets.emit('chat', data);
    })
})

