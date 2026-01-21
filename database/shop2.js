let sql = require('mysql');
let connect = require('./connection');
let err = require('./file.err.js');


//  get route  done

     function  Getproduct (req,res) {
    let sql = "SELECT  category, title, detail, stock, weight, size, photo, islive FROM product where is_deleted = 1 ORDER BY id DESC";

    connect.con.query(sql,(error,result) => {
        if(error){
            console.log(error);
            err.LogError('You have Error', error);
            
        }
        else {
            res.json(result);
        }
    })
}


// post route done 
    function InsertProduct(req,res){

  let {category, title, detail, stock, weight, size, photo, islive} = req.body;
    if(category == undefined || title == undefined || detail == undefined || stock == undefined || weight == undefined || size == undefined || photo == undefined || islive == undefined){ 
        res.json([{'error':'no'},{'success:':'no'},{'mesaage':'input is Missing'}])
    }
    else {
        let sql = "INSERT INTO product (category, title, detail, stock, weight, size, photo, islive) VALUES (?,?,?,?,?,?,?,?)"; 
        let values = [category, title, detail, stock, weight, size, photo, islive];
        connect.con.query(sql, values, (error,result) =>{
            if(error){
                res.json([{'error':'somthing wrong in code'}]);
                console.log(error);
            }       
            else {
                res.json([{'error':'no'},{'sucess':'yes'},{'message':'Data are inserted'}]);
            }
        });
    }



}

 // put route  done

    function editproduct (req,res)  {
    let {id, category, title, detail, stock, weight, size, photo, islive} = req.body;   
     if(id == undefined || category == undefined || title == undefined || detail == undefined || stock == undefined || weight == undefined || size == undefined || photo == undefined || islive == undefined){
        res.json([{'error':'no'},{'success:':'no'},{'mesaage':'input is Missing'}])
     }
     else {
        let sql = "UPDATE product SET category = ?, title = ?, detail = ?, stock = ?, weight = ?, size = ?, photo = ?, islive = ? WHERE id = ?";
        let values = [category, title, detail, stock, weight, size, photo, islive, id];
         connect.con.query(sql,values,(error,result) =>{
            if(error){
                res.json([{'error':'somthing wrog in code'}]);
                console.log(error);
            }
            else {
                if(result.affectedRows === 0){
                    res.json([{'error':'no'},{'sucess':'no'},{'message':'product not found'}]);

                }
                else {
                    res.json([{'error':'no'},{'sucess':'yes'},{'message':'Data are updated'}]);
                }
            }
         }) 
    }
}

// delete route 
function deleteproduct (req,res) {
 
     let {id} = req.body;
     if(id == undefined)
     {
        res.json([{'error':'no'},{'success:':'no'},{'mesaage':'input is Missing'}]);
     }
     else {
        let sql = " update product set is_deleted = 0 where id = ? ";
        connect.con.query(sql, [id], (error, result) => {
            if(error){
                res.json([{'error':'somthing wrog in code'}]);
                console.log(error);
                err.LogError('You have Error', error);
            }
            else {
                if(result.affectedRows === 0){
                    res.json([{'error':'no'},{'sucess':'no'},{'message':'product not found'}]);
                }
                else {
                    res.json([{'error':'no'},{'sucess':'yes'},{'message':'Product are deleted'}]);
                }
            }
        });
     }
}

module.exports = {
    Getproduct,
    InsertProduct,
    editproduct,
    deleteproduct
}