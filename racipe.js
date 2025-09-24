var http = require('http');
//localhost:3000 (home)
//localhost:3000/aboutus (aboutus)
//localhost:3000/contactus (contactus)
//localhost:3000/products (products)
//create server 
var server = http.createServer(function (request, response) {
    //code in this function will run for each and every requested
    let url = request.url;
    console.log(url);
    response.writeHead(200,{'content-type':'text/html'});
    if (url === '/')//home
    {
        response.write("<html><head></head><body><h1>Home</h1><p>this is home page</p></body></html>")
    }
    else if (url === '/aboutus') {
        response.write("<html><head></head><body><h1>about us</h1><p>this is about us page</p></body></html>")
    }
    else if (url === '/contactus') {
        response.write("<html><head></head><body><h1>contact us</h1><p>this is contact us page</p></body></html>")
    }
    else if (url === '/products') {
        response.write("<html><head></head><body><h1>products</h1><p>this is products page</p></body></html>")
    }
    response.end();
});
//let us start server
server.listen(5000);
console.log('server started...');