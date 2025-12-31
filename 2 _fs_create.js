let http = require("http");
let fs = require("fs");

let server = http.createServer((req,res) =>{
    res.writeHead(200,{"Content-Type" : "text/html"})
    fs.writeFile("secound.txt" , "hello " , (error) =>{
        if(error)
        {
            res.write("file not created ")
            console.log(error);
        }
        else{
            console.log("file are Created");
        }

        res.write("file are created");
        res.end();
    } )
});

let port = 3000;
server.listen( port , () =>{
    console.log("Server is running ")
})