let http = require('http');
// using module
let date = require('./module/date')
let server = http.createServer((req,res) =>
{
  res.writeHead(200,{'content-typ' : 'text/html'});
  let display= date.CurrentDate() +"    " + date.getTime();

  res.write(display);
  res.end();
});
server.listen(5000)
console.log('server is start')
