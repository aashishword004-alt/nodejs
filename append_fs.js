let http = require("http");
let fs = require("fs");
let url = require('url');

let server = http.createServer((req,res) =>{
    res.writeHead(200,{"Content-Type" : "text/html"})
    let endpoint = url.parse(req.url,true);
    let path  = endpoint.pathname; // routes   
    let data  = endpoint.query;
    // example  locallhost:://3000/?
    
    let name = data.name;
    let email = data.email;
    let mobile = data.mobile;
    let password = data.password;

    
    let filename =  "secound.txt";
    let info = `${name} \n ${email} \n ${mobile} \n ${password}`;
    
    console.log(info);

    fs.appendFile(filename , info , (error) =>{
        if(error)
        {
            console.log("file data are not Enter  ")
    
        }
        else{
            console.log("file data are Enter Succecfully");
        }

        res.write("file data are insert");
        res.end();
    } )
});

let port = 3000;
server.listen( port , () =>{
    console.log("Server is running ")
})