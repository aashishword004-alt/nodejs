let express = require('express');
const bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// category path
let category = require('./category_2');

// user Path
let user = require('./user_2.js');


// User Rout 
const USER_ROUT = '/user';

// Ragistretion Rout
app.post(USER_ROUT + '/Ragistre' ,(req,res) =>{user.Ragister(req,res)});

// Login Rout 
app.post(USER_ROUT + '/login' ,(req,res) =>{user.Login(req,res)});

// Change Password Rout 
app.post(USER_ROUT + '/change_password' ,(req,res) =>{user.ChangePassword(req,req)});


//CATEGORY ROUT
const USER_CATEGORY = '/category';

// get rout 
app.get(USER_CATEGORY + '/:start?',(req,res) =>{ category.Select(req,res)});

// post method 
app.post(USER_CATEGORY , (req,res) =>{category.Postmethod(req,res);});

// put method 
app.put(USER_CATEGORY , (req,res) =>{ category.Putmethod(req,res)});

//  delete method
app.delete(USER_CATEGORY , (req,res) =>{ category.methodDelete(req,res)})


let port = 3000;
app.listen(port,() =>{
console.log('Server is start');
});