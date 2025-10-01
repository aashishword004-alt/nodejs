let http = require('http');
let ema = require("./module/email")

function Reciver(req, res){
    res.writeHead(200, { "content-Type": "text/html" });

    let display = new ema.Email("Ashish@gmail.com", "HIyy", "I am alon");
    display.Send();  
    res.write("Sent email");
    res.end();

}

let server = http.createServer(Reciver);
server.listen(5000);
console.log('server is start');