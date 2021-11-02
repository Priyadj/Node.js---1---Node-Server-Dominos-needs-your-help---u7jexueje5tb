const http = require("http");
const fs = require("fs");
const express = require("express");

const app = express() 
const welcome = express() 
const contact =express()

welcome.get('/', function (req, res) {
    res.status(200);
    res.setHeader('Content-Type', 'text/plain')
    res.send('Welcome to Dominos!')

})

contact.get('/', function (req, res) {
    res.status(200);
    res.setHeader('Content-Type', 'application/json')
    res.send({
        'phone': '18602100000',
        'email': 'guestcaredominos@jublfood.com'
      })
  
 
    })

app.use('/welcome', welcome);
app.use('/contact', contact);

const httpServer = http.createServer(app);


httpServer.listen(3000);



