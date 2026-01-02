const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connect = require('./connection.js');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const ROUTE = '/category';

app.get(ROUTE , (req, res) => {
    console.log(ROUTE);

    let start = 0;
    let end = 20;

    // if (req.params.start !== undefined) {
    //     start = parseInt(req.params.start);
    // }

    const sql = `SELECT id, name, detail, photo FROM category ORDER BY id DESC LIMIT ?, ?`;
    let values = [start, end];

    connect.con.query(sql, values, (error, table) => {
        if (error) {
            res.json(error);
            console.log(error);
            return;
        }
        res.json(table);
    });
});


app.post(ROUTE, (req, res) => {
    let { name, detail, photo } = req.body;
    if (name == undefined || detail == undefined || photo == undefined) {
        res.json([{ 'error': 'no' }, { 'success:': 'no' }, { 'mesaage': 'input is Missing' }])
    }
    else {
        const sql = 'INSERT INTO category (name, detail, photo) VALUES (?,?,?)';
        let values = [name, detail, photo];
        connect.con.query(sql, values, (error, result) => {
            if (error) {
                console.log(error);
                res.json([{ 'error': 'somthing wrong in code' }])
            }
            else {
                res.json([{ 'error': 'no' }, { 'sucess': 'yes' }, { 'message': 'Data are inserted' }]);

            }

        });

    }

});
app.put(ROUTE, (req, res) => {
    const sql = `UPDATE category SET name='${req.body.name}', detail='${req.body.detail}', photo='${req.body.photo}' WHERE id=${req.body.id}`;
    connect.con.query(sql, (error, result) => {
        if (error)
            console.log(error);
        else
            res.send('Record Updated with id ' + req.body.id);
    });
});

// app.delete( ROUTE, (req,res) =>{
//     let id = req.body.id;
//     id = parseInt(id);
//     const sql = `DELETE FROM category WHERE id = ${req.body.id}` ;
//     connect.con.query(sql, (error, result) =>{
//         if(error)
//             console.log(error);
//         else
//             res.send('Record Deleted with id ' + req.body.id);  
//     });
// });


const Port = 3000;
app.listen(Port, () => {
    console.log('Server is running on port ' + Port);
});