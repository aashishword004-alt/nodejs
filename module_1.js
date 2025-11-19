var http = require('http');
var dt = require('./lib/datetime');

let server = http.createServer(function (req, res) {

    res.writeHead(200, { "Content-Type": 'text/plain' });
    let output = dt.CurrentDate() + '' + dt.Currentime();
    res.write(output);
    res.end();


})

let port = 3000;
server.listen(port , function (){
    console.log("Server is running on port " + port);
})