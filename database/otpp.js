
let http = require("http");
let password = require("../lib/otp");


let server = http.createServer((req,res) =>{
  res.writeHead(200,{"Content-Type" : "text/plain"})
  let output = password()
  console.log(output);
  res.write(output);
  res.end()

});
let port = 5000;
server.listen(port , () =>{
    console.log("server is running ");
})
