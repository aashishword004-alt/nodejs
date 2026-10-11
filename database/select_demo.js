const connect = require ('./connection.js');;

const sql = "select name , detail , photo from category" ;

connect.con.query(sql, (error, result) => {

    if(error)
    {
        console.log(error);

    }
    else{
        let size = result.length;
        for(let index = 0; index<size; index++)
        {
            let  { name , detail , photo } = result[index];
            console.log ( name + " " + detail + " " + photo);
        }
    }
})

