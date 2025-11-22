var http = require("http");
let sequrity = require("./lib/securityy");

async function hadlePassdword(req, res) {
    let password = await sequrity.generatePassword();
    sequrity.getpassword(password).then((hash) => {
        res.write(password);
        res.write("\n");
        res.write(hash);
        console.log(password);
        console.log("////");
        console.log(hash);
    });


    res.writeHead(200, { "Content-type": "text/plain" });
    res.end();

}

let server = http.createServer((req, res) => hadlePassdword(req, res));

let port = 3000;
server.listen(port, () => {
    console.log("Server is runnig on port " + port)
})