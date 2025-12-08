let express = require('express');
let bodyParser = require('body-parser');
let otp = require('../lib/otp')
let app = express();
app.use(express.urlencoded({ 'extended': true }));
app.use(bodyParser.json());

/* 
7) create API that works upon list of object (JSON) that will create/update/delete/fetch account data.
        account should have account id (auto generated), name, balance, mobile,email  */

let Route = "/bank"
let Accounts = [];
let accountID = 1;
let Accountid = otp();

app.get("/", (req, res) => {
    res.json(Accounts);
});


app.post(Route, (req, res) => {

    let { name, balance, mobile, email } = req.body;
    let output = null;

    if (name === undefined || balance === undefined || mobile === undefined || email === undefined) {
        output = [{ 'error': 'no' }, { 'message': 'input is messing' }];

    }
    else {
        let account = {
            id:accountID++,
            AccountNomber: Accountid,
            name: name,
            balance: balance,
            mobile: mobile,
            email: email
        };

        Accounts.push(account);
        output = [{ 'error': 'no' }, { 'message': 'data are inserted' }];
    }

    res.json(output);
});


app.put(Route, (req, res) => {
    let { id  , name, balance, mobile, email } = req.body;
    let output = null;

    if (name === undefined || balance === undefined || mobile === undefined || email === undefined) {
        output = [{ 'error': 'no' }, { 'message': 'input is messing' }];

    }
    else {
        let isUpdate = false;
        Accounts.forEach((item, index) => {

            if (item.id === parseInt(id)) {
                Accounts[index].name = name;
                Accounts[index].balance = balance;
                Accounts[index].mobile = mobile;
                Accounts[index].email = email;
                isUpdate = true;
            }
        });
        if (isUpdate === false) {
            output = [{ 'error': 'no' }, { 'message': 'Account not found' }];
        }
        else {
            output = [{ 'error': 'no' }, { 'message': 'Account Details are updated' }];


        }
    }


    res.json(output);
});

app.delete(Route, (req, res) => {
    let output = null;
    let id = req.body.id;

    if (id === undefined) {
        output = [{ 'error': 'no' }, { 'message': 'Account not found' }];

    }
    else {
        let isDelete = false
        Accounts = Accounts.filter((item) => {
            if (item.id !== parseInt(id))
                return item
            else {
                isDelete = true;


            }
        });
        if (isDelete === false) {
            output = [{ 'error': 'no' }, { 'message': 'Account not delete' }];

        }
        else {
            --id;
            output = [{ 'error': 'no' }, { 'message': 'Account  deleted' }];

        }
    }

    res.json(output);

});

let port = 3000;

app.listen(port, () => {
    console.log("Server has been started");
});