var http = require('http');
var count = 0;
var server = http.createServer(function( request,response){
    count++
    console.log(`I have requst ${count} time`);

});
server.listen(5000);
console.log('server has started');