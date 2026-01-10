let express = require('express');
const bodyParser = require('body-parser');
let app = express();
let user = require('./category_2');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//CATEGORY ROUT
let USER_CATEGORY = '/category'

// get rout 
app.get(USER_CATEGORY + '/:start?',(req,res) =>{ user.Select(req,res)});

// post method 
app.post(USER_CATEGORY , (req,res) =>{user.Postmethod(req,res);});

// put method 
app.put(USER_CATEGORY , (req,res) =>{ user.Putmethod(req,res)});

//  delete method
app.delete(USER_CATEGORY , (req,res) =>{ user.methodDelete(req,res)})



let port = 3000;
app.listen(port,() =>{
console.log('Server is start');
});