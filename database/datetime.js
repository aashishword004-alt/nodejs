var http =  require("http");
let dt = require("../lib/datetimemodule");

let server = http.createServer( (req,res) =>{

    res.writeHead(200,{"Content-Type":"text/plain"});
   
    let output = "Current Date  " + dt.getDate() + "   " + "current Time  " + dt.getTime();
    res.write(output);
   
    //res.write("Server is listing on port 3000");
    res.end();


})

let port = 3000;
server.listen(port, ()=>{
    console.log("server is running on port" + port);
});