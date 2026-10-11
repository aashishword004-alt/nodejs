const connect = require ('./connection.js');
<<<<<<< HEAD
const sql = "update  category set is_delete = 1 where id = 6"
=======
const sql = "update category set is_deleted = 1 where id = 3" ;
>>>>>>> dad17809b3aef48323b108c7beabb5ebef845041
connect.con.query(sql, (error, result) =>{
    if(error)
        console.log(error);
    else
        console.log('data are inserted ' + result.insertId);
        console.log('row ' + result.affectedRows);
        console.log("Record Inserted"); 
});