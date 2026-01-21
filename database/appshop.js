let express = require('express');
let app = express();
let bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));


// Product Path
let Product = require('./shop2');


// Product Route 
const PRODUCT = '/product';

// get route
app.get(PRODUCT + '/get', (req,res) =>{Product.Getproduct(req,res); });

// post route
app.post(PRODUCT + '/insert', (req,res) =>{Product.InsertProduct(req,res);});

// put route
app.put(PRODUCT + '/eddit', (req,res) => {Product.editproduct(req,res)});

// delete route 
app.delete(PRODUCT + '/delete', (req,res) =>{{Product.deleteproduct(req,res)}})



app.listen(5000, () =>{
    console.log("Server is running on port 5000");
})