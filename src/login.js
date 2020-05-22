const express = require('express');
const http = require('http');
const login = express.Router();



login.use(express.json());

login.post('/', auth)




function auth(request, response){
    if(request.body.username && request.body.password){
        const user = {
            username: request.body.username,
            password: request.body.password
        }
        const options = {
            hostname: 'localhost',
            port: 3001,
            method: 'POST'
        }
        const req = http.request(options, (res) => {
            res.on('data', (data) => {
                response.json(data.toString())
            })
            res.on('end', () => {
                console.log(res.headers["set-cookie"][0]);

            })
        });
        req.on('error', ()=> console.log("an error"));
        req.write(JSON.stringify(user));
        req.end()
    }
    else {
        response.json({
            message : 'username and password required'
        })
    }
    
}



module.exports = login;