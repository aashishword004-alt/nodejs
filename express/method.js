let express = require('express');
let bodyParser = require("body-parser");
let app = express();

app.use(express.urlencoded({ 'extended': true }));
app.use(bodyParser.json());

let customers = [];
let customerID = 1;

app.get("/", (req, res) => {

    res.json(customers);
});

// done 
app.post("/contact", (req, res) => {

    /*  let name = req.body.name;
    let email = req.body.email;
    let mobile = req.body.mobile;
    let message = req.body.message;
    output = `name = ${name} , email = ${email}, mobile = ${mobile}, message = ${message}`; */

    let output = null;
    let { name, email, mobile, message } = req.body;
    console.log(req.body);

    if (name === undefined || email === undefined || mobile === undefined || message === undefined) {
        output = [{ 'error': 'inpute is missing ' }];

    }
    else {


        let newCustomer = {
            id: customerID++,
            name: name,
            email: email,
            mobile: mobile,
            message: message
        };
        customers.push(newCustomer);
        console.log(customers);
        output = [{ 'error': 'no' }, { 'message': 'data are inserted' }];
    }


    res.json(output);

});


app.put("/", (req, res) => {
    let output = null;
    let {id, name, email, mobile, message } = req.body;
    if(id === undefined || name === undefined, email === undefined , mobile === undefined , message === undefined)
    {
                output = [{ 'error': 'inpute is missing ' }];

    }
    else {

        customers.forEach(item, index)
        {
            
        }
    }



});




app.delete("/", (req, res) => {

    res.send("this is a delete  method");


});

let port = 3000;

app.listen(port, () => {
    console.log("serever has been started");
})



