let http = require("http");
let url = require("url");
let fs = require("fs");

let server =  http.createServer((req,res) =>{
    res.writeHead(200,{"Content-type" : "text/html"})
    let search = url.parse(req.url,true);
    let path = search.pathname;

    let output = "site/404.html";
    if(path === "/" || path === "/home.html" || path==="/index.html")
    {
        output = "site/index.html";
    }
    else if(path === "/menu.html")
    {
        output = "site/menu.html"
    }
      else if(path === "/gallery.html")
    {
        output = "site/gallery.html"
    }
      else if(path === "/marriage-hall.html")
    {
        output = "site/marriage-hall.html"
    }
      else if(path === "/recipe.html")
    {
        output = "site/recipe.html"
    }
      else if(path === "/testimonials.html")
    {
        output = "site/testimonials.html"
    }

    fs.readFile(output , (error ,filecontet) => {
         if(error)
         {
            res.write("Somthing awrong")
         }
         else{
             
             res.write(filecontet);
         }
        res.end();
    })
})

let port = 3000;
server.listen(port, () =>{
    console.log("Server is start");

})