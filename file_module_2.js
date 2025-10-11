let http =require("http");

let fs = require("fs");
 


let server = http.createServer((req,res) =>{
     
    let url = req.url;
    let filename="site/404.html"

    if(url == "/" || url == "/home")
    {
        filename="site/home.html"
    }
    else if( url == "/aboutus")
    {
        filename = "site/about.html"
    }
    else if( url == "/contactus")
    {
        filename = "site/contact.html"
    }

    res.writeHead(200,{'Contect-Type':'text/html'})
    let filedata = fs.readFileSync(filename)
     res.write(filedata);
     res.end()

})
let port = 5000;
server.listen(port,()=>{
    console.log("Sereve is start");
})