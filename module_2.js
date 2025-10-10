// file methode use in node js


let http = require("http");

const fs= require("fs");


let server = http.createServer((req,res) =>{

    let url = req.url;

    let filename = "site/404.html"

    if(url == "/" || url == "/home")
    {
         filename = "site/home.html" 
    }
    else if(url == "/aboutus"){
        
        filename="site/about.html"

    }
    else if(url == "/contact"){
    
        filename="site/contact.html"

    }
     fs.readFile(filename , (error  , data) =>{
     res.writeHead(200,{"Content-type":"text/html"});
     if(error)
     {
        filename="site/404.html"

     }
     else{

         res.write(data);
     }
    res.end();

   })    
   
});

let port = 5000;

server.listen( port ,() =>
{
    console.log("Server is start");
})
