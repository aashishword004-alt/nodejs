let http = require("http");
let fs = require("fs");

let details = {
    name : "Ashish",
    age : 20,
    course : "MERN"
}
let server = http.createServer((req,res) =>{
    res.writeHead(200,{"Content-Type" : "text/html"})
    let output = JSON.stringify(details)

    fs.writeFile("secound.txt" , output , (error) =>{
        if(error)
        {
            res.write("file not update ")
            console.log(error);
        }
        else{
            console.log("file are file are update");
        }

        res.write("file are updated");
        res.end();
    } )
});

let port = 3000;
server.listen( port , () =>{
    console.log("Server is running ")
})