const connect = require ('./connection.js');
const sql = "update category set name='ASHISH PArmar' where id=1";
connect.con.query(sql, (error, result) =>{
    if(error)
        console.log(error);
    else
        console.log('row ' + result.affectedRows);
        console.log("Record Updated"); 
});