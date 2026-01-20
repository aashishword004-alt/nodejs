let sql = require('mysql');
let express = require('express');
let app = express();
let bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}));

const PRODUCT = '/product';


// Get part 
app.get(PRODUCT , (req,res) =>{

});








let port = 5000;
app.listen(port , () =>{
    console.log('Server has been started');
})