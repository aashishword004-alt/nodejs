let http = require('http');
let detai = require('./module/3_mudule')
let server = http.createServer(function(req,res) {
    res.writeHead(200,{'content-type':'text/html'});
     let output = detai.addresh +'</br>' + detai.pincode +'</br>'+ detai.state +'</br>'+ detai.name +'</br>'+ detai.contectno;
    res.write(output);
    res.end();
});
server.listen(5000);
console.log('server is start');