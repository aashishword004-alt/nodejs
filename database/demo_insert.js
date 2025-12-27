const connect = require ('./connection.js');
const sql = "INSERT INTO category (name,photo,detail) VALUES ('ASHISH','tip.jpg','my name')";
connect.con.query(sql, (error, result) =>{
    if(error)
        console.log(error);
    else
        console.log('data are inserted ' + result.insertId);
        console.log('row ' + result.affectedRows);
        console.log("Record Inserted"); 
});