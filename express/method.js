let express = require('express');
let bodyParser = require("body-parser");
let app = express();

app.use(express.urlencoded({ 'extended': true }));
app.use(bodyParser.json());

let customers = [];

app.get("/", (req, res) => {

    res.json(customers);
});

app.post("/contact", (req, res) => {


    /*  let name = req.body.name;
    let email = req.body.email;
    let mobile = req.body.mobile;
    let message = req.body.message;
    
    output = `name = ${name} , email = ${email}, mobile = ${mobile}, message = ${message}`; */

    let output = null;
    let { name, email, mobile, message } = req.body;
    console.log(req.body);

    let newCustomer = {
         name: name,
         email: email,
         mobile: mobile,
         message: message
     };
     console.log(newCustomer);
     customers.push(newCustomer);  

    // customers.push(req.body);
    // console.log(customers); 

    output = [{ 'error ': 'no' }, { 'succes': 'yes' }, { 'message': 'Contect inserted' }];

    res.json(output);
});







app.put("/", (req, res) => {

    res.send("this is a put method");


});

app.delete("/", (req, res) => {

    res.send("this is a delete  method");


});

let port = 3000;

app.listen(port, () => {
    console.log("serever has been started");
})



