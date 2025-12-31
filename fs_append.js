const { error } = require("console");
let http = require("http");
let url = require('url');
let fs = require("fs");

let name = "Ashish";
let email = "aashishparar789p@gmail.com";
let mobile = 9824047910;
let story = " i Hate Relationship";



let server = http.createServer((req,res) =>
    {
 
    let queryString = url.parse(req.url,true)
    let path = queryString.pathname;

    if( path == "/add_story")
    {
       let Adddata = `\nname = "${name}" \n.email = "${email}" \n.mobileno = "${mobile}" \n.story  = "${story}"`

    

    fs.appendFile("mystory.txt" ,Adddata,(error) =>{
        if( error )
        {
            console.log("Some issue ");
        }
        else{
            console.log("Data append succesfully ");
        }
    })


    res.writeHead(200,{"Content-Type" : "text/plain"})
    res.write("Server is lisning");
    res.end();
}
}
);

let port = 5000;
server.listen(port, () =>{
    console.log("Server is Start");
})