// server.js
let http = require('http');
let url = require('url');
let businf = require('./module/bus'); 
const path = require('path');

let server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    let busobject = url.parse(req.url,true);
    let qurystring = busobject.query;

    let output = businf;

    // false condition busrun whene the bus not found 
    // not use else if  

    output = output.filter(bus => {
        if (qurystring.source && bus.from !== qurystring.source) return false;

        if (qurystring.destination && bus.to !== qurystring.destination) return false;

        if (qurystring.acType && bus.acType !== qurystring.acType) return false;

        if (qurystring.seatType && bus.seatType !== qurystring.seatType) return false;

        if (qurystring.rent && bus.rent != (qurystring.rent)) return false;

        return true;
    });

    res.write(JSON.stringify(output));
    res.end();
});

server.listen(5000, () => console.log("Server is running on port 5000"));
