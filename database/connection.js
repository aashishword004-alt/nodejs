const mysql = require('mysql');
const com = require('./4_mudule.js');
const con = mysql.createConnection({

    host:com.server,
    user:com.username,
    password:com.password,
    database:com.database,
    port:com.portno
});

con.connect((error) =>{
    if(error)
     
            console.log(error);
        
        
    else
        console.log("Database connnected");

});

module.exports.con = con;
