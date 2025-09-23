var http = require('http');
// home racipe
// panipur
//pavbaji
//pulav
 var server = http.createServer(function (request, response) {
 let url = request.url;
 console.log(url);
 response.writeHead(200,{'content-type':'text/html'})
 if(url === '/') /// home
 {
    response.writeHead("<html><head><meta> <title>Recipe List</title></head><body><h1>Home</h1><h2>Recipes</h2><ul><li>Pav Bhaji</li><li>Dhokla</li><li>Pani Puri</li><li>Pulav</li></ul></body></html>")
 }
 else{

 }
 response.end();
})
server.listen(5000);
console.log('server startted')