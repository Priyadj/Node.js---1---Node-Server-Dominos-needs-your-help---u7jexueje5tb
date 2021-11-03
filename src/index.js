const http = require("http");
const fs = require("fs");




const httpServer = http.createServer(handleServer);
function handleServer(req,res) {
    if(req.url === "/welcome"){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.write('Welcome to Dominos!');
        res.end();
        return;
    }
    if(req.url === "/contact"){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify({
            'phone': '18602100000',
            'email': 'guestcaredominos@jublfood.com'
          }));
        res.end();
        return;
    }
}


httpServer.listen(8081);



