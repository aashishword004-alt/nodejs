let http = require("http");
let fs = require("fs");
let url = require('url');
let server = http.createServer((req,res) =>{
    res.writeHead(200,{"Content-Type" : "text/html"})
   let end = url.parse(req.url,true);
   let data = end.query;
   let filename = data.filename;

    fs.unlink(filename ,  (error) =>{
        if(error)
        {
            res.write("file data are not delete  ")
    
        }
        else{

            res.write("file data are deleted");
        }

        res.end();
    } )
});

let port = 3000;
server.listen( port , () =>{
    console.log("Server is running ")
})