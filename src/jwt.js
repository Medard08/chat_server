const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const path = require('path')

const app = express();

app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../../client/dist/client-chat')));


app.listen(3000, ()=> console.log('listening .....'));