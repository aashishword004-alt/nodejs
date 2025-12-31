let http = require("http");
let fs = require("fs");
let url = require('url');
let server = http.createServer((req,res) =>{
    res.writeHead(200,{"Content-Type" : "text/html"})
   let end = url.parse(req.url,true);
   let data = end.query;
    let  { oldfilename , newfilename  } = data;
   fs.rename( oldfilename , newfilename,     (erro) =>{
    if(erro)
    {
        console.log("file name are not change");
    }
    else{
        res.write("file name are changed");
    }
   })
});

let port = 3000;
server.listen( port , () =>{
    console.log("Server is running ")
})