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
    response.writeHead(200, { 'content-type': 'text/html' });
    if (url === '/')//home
    {
        response.write("<html><head><title>Recipe List</title></head><body><h1>Home</h1><p>This is home page</p><p>Pav Bhaji, Dhokla, Pani Puri, Pulav</p></body></html>");
    }
    else if (url === '/pavbhaji') {
        response.write("<html><head><title>Recipe List</title></head><body><h1>Home</h1><p>This is home page</p><p>Pav Bhaji: Mix vegetables and cook with pav bhaji masala, Dhokla: Steam fermented batter of rice and chickpeas, Pani Puri: Fill puris with spiced water and potato, Pulav: Cook rice with vegetables and spices</p></body></html>");
    }
    else if (url === '/dhokla') {
        response.write("<html><head><title>Dhokla</title></head><body><h1>Dhokla</h1><p>How to make Dhokla: Steam fermented batter of rice and chickpeas.</p></body></html>");
    }
    else if (url === '/panipuri') {
        response.write("<html><head><title>Pani Puri</title></head><body><h1>Pani Puri</h1><p>How to make Pani Puri: Fill puris with spiced water and potato.</p></body></html>");
    }
    else if (url === '/pulav') {
        response.write("<html><head><title>Pulav</title></head><body><h1>Pulav</h1><p>How to make Pulav: Cook rice with vegetables and spices.</p></body></html>");
    }
    response.end();
});
//let us start server
server.listen(5000);
console.log('server started...');