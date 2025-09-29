let http = require('http');
let zoho = require('./module/email') 
let server = http.createServer(function(req,res) {
    res.writeHead(200,{'content-typ': 'text-plain'});
    let display=zoho.Sendemail()
    res.write(display);
    res.end();
});
server.listen(5000);
console.log('server is start');