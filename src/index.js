var http = require("http");
const fs = require("fs");
const express = require("express");

var app = express() 
var welcome = express() 
var contact =express()

welcome.get('/', function (req, res) {
  res.send('Welcome to Dominos!')
  res.status(200);
  res.set('Content-Type', 'text/plain')
})

contact.get('/', function (req, res) {
    res.status(200);
    res.set('Content-Type', 'application/json')
    res.send({
        'phone': '18602100000',
        'email': 'guestcaredominos@jublfood.com'
      })
  
 
    })

app.use('/welcome', welcome);
app.use('/contact', contact);

const httpServer = http.createServer(app);


httpServer.listen(3000);



