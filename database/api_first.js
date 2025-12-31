const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connect = require('./connection.js');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const ROUTE = '/category';

app.get(ROUTE, (req, res) => {
    let start = 50;
    let end = 111
    const sql = `SELECT name ,detail,photo FROM category limit ${start},${end}`;
    connect.con.query(sql, (error, table) => {
        res.send(table);
        console.log(table);
    })

});

app.post(ROUTE, (req, res) => {
    const sql = `INSERT INTO category (name, detail, photo) VALUES ('${req.body.name}', '${req.body.detail}', '${req.body.photo}')`;
    connect.con.query(sql, (error, result) => {
        if (error) {
            console.log(error);
        }
        else {
            res.send('Data inserted with id ' + result.insertId);
        }

    });
});
app.put( ROUTE, (req,res) =>{
    const sql = `UPDATE category SET name='${req.body.name}', detail='${req.body.detail}', photo='${req.body.photo}' WHERE id=${req.body.id}` ;
    connect.con.query(sql, (error, result) =>{
        if(error)
            console.log(error);
        else
            res.send('Record Updated with id ' + req.body.id);      
    });
})

app.delete( ROUTE, (req,res) =>{
    let id = req.body.id;
    id = parseInt(id);
    const sql = `DELETE FROM category WHERE id = ${req.body.id}` ;
    connect.con.query(sql, (error, result) =>{
        if(error)
            console.log(error);
        else
            res.send('Record Deleted with id ' + req.body.id);  
    });
})


const Port = 3000;
app.listen(Port, () => {
    console.log('Server is running on port ' + Port);
});