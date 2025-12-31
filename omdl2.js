let http = require('http');
let exprr= require('./module/object')
let server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-type': 'text/html' })
    let obje =exprr.Hashpassword('Ashish');
    let ispass = exprr.Macthpassword('Ashish',obje);
    console.log(ispass)
    response.write(obje);
    response.end()
});
server.listen(5000);
console.log('server is start')