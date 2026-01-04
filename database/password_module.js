var http = require("http");
let sequrity = require("../lib/securityy");

function hadlePassdword(req, res) {
    let password = sequrity.generatePassword();
    sequrity.getpassword(password).then(function (conformpassword) {
        console.log(password);
        res.writeHead(200, { "Content-type": "text/plain" });
        res.write(password  + " \n " + conformpassword);
        res.end();
    });




}

let server = http.createServer((req, res) => hadlePassdword(req, res));

let port = 5000;
server.listen(port, () => {
    console.log("Server is runnig on port " + port)
})