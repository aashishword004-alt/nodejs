let http = require('http');

// let  url = require('url');

let businf = require('./module/bus');

let  server = http.createServer( function (req,res){
 
    res.writeHead(200,{'content-type':'application/json'});
    // let qury = url.parse(res.url,true);
    // let filter = businf;
    let output = businf;
    
    res.write(JSON.stringify(output));
    res.end();
})

server.listen(5000);
console.log("Serever is start");