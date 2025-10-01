let http = require('http');
let zoho = require('./module/email') 
let server = http.createServer(function(req,res) {
    res.writeHead(200,{'Content-Type': 'text/html'});
    let display=zoho.form+"<br>"+zoho.to+"<br>"+zoho.sub+"<br>"+zoho.detail;
    res.write(display);
    res.end();
});
server.listen(5000);
console.log('server is start');