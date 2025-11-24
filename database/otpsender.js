let http = require("http");
let otp = require("../lib/otp")
let Sender = require("../lib/email");

let server = http.createServer((req,res) =>{
     
    let code = otp;
    console.log(code);
    let send = Sender("aashishword004@gmail.com",`Your opt is ${code}`)
    console.log(send);
    
    res.writeHead(200,{"Content-Type" : "text.plain"})
    res.end()
})

// padning for sending code otp ;
