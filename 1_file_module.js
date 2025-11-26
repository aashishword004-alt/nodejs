let http = require("http");
let url = require("url");
let fs = require("fs");

let server =  http.createServer((req,res) =>{
    res.writeHead(200,{"Contect-type" : "text/html"})
    let path = req.url;
    let output = "site/404.html";
    if(path === "/" || "home")
    {
        output = "site/index.html";
    }
    else if(path === "menu.html")
    {
        output = "site/menu.html"
    }
      else if(path === "gallery.html")
    {
        output = "site/gallery.html"
    }
      else if(path === "marraige-hall.html")
    {
        output = "site/marraige-hall.html"
    }
      else if(path === "racipe.html")
    {
        output = "racipe.html"
    }
      else if(path === "testimonials.html")
    {
        output = "site/tesimonials.html"
    }

    fs.readFile(output , (error ,filecontet) => {

        res.write(filecontet);
        res.end();
    })
})

let port = 3000;
server.listen(port, () =>{
    console.log("Server is start");

})