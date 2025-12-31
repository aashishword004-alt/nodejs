let http = require('http');
let url = require("url");
let fs = require("fs");

let server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    
    let endpoint = url.parse(req.url, true);
    let data = endpoint.query;

    let Name = data.Name;
    let Price = data.Price;
    let Weight = data.Weight;
    let Description = data.Description;

     console.log(Name,Weight,Price,Description);
    let filename = "mystory.txt";

    let info = `${Name}\n${Price}\n${Weight}\n${Description}`;

    fs.writeFile(filename, info, (error) => {
        if (error) {
            res.write("File data not inserted");
        } else {
            res.write("Data inserted Successfully");
        }
        res.end();
    });
});

let port = 3000;
server.listen(port, () => {
    console.log("Server started on port 3000");
});
