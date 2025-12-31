const connect = require ('./connection.js');
const sql = "update  category set is_delete;
connect.con.query(sql, (error, result) =>{
    if(error)
        console.log(error);
    else
        console.log('data are inserted ' + result.insertId);
        console.log('row ' + result.affectedRows);
        console.log("Record Inserted"); 
});