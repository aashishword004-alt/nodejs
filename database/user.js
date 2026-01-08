let express = require('express');
let connect = require('./connection');
let bodyParser = require('body-parser');
let app = express();
let sequrityy = require('../lib/securityy')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// dont use  get method in input api 

const USER_ROUTE = '/user'


// using post method in ragistration done
app.post(USER_ROUTE + '/ragistration', (req, res) => {
    let { email, mobile, password } = req.body;
    if (email == undefined || mobile == undefined || password == undefined) {
        res.json([{ 'error': 'no' },
        { 'success': 'no' },
        { 'message': 'input is Missing' }])
    }
    else {
        let sql = "INSERT INTO users(email, mobile, password) VALUES (?,?,?)";
        sequrityy.gethashpassword(password).then(function (conformpassword) {
            let VALUES = [email, mobile, conformpassword]
            connect.con.query(sql, VALUES, (error, result) => {
                if (error) {
                    //console.log(error);
                    if (error.errno === 1062) {
                        res.json([
                            { 'error': 'User alredy Ragistreted Please Enter new Detail' }])
                    }
                    else {

                        res.json([{ 'error': 'Somthing wrong in code' }])
                    }
                }
                else {
                    // console.log(conformpassword);
                    res.json([{ 'error': 'no' },
                    { 'success': 'yes' },
                    { 'message': 'Ragistration Succesfully' }])

                }


            })
        });

    }
});

// using post method in login done 

app.post(USER_ROUTE + '/login', (req, res) => {

    let { email, password } = req.body;
    if (email === undefined || password === undefined) {
        res.json([{ 'error': 'input is missing' }]);
    }
    else {
        let sql = 'select email,password from users where email=?';
        connect.con.query(sql, [email], (error, result) => {
            if (error) {
                res.json([{ 'error': 'Somthing wrong please wait' }]);

            }
            else {
                if (result.length == 0) {
                    res.json([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'invalid email address' }]);

                }
                else {

                    let hashpassword = result[0]['password'];
                    sequrityy.conformpassword(password, hashpassword).then((ispasswordmatch) => {
                        if (ispasswordmatch == false) {
                            res.json([{ 'error': 'no' }, { 'seccess': 'no' }, { 'message': 'invaild password' }]);
                        }
                        else {
                            res.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'login succesfully' }, { 'id': result[0]['id'] }]);

                        }
                    });

                }
            }
        });
    }
});

// change password  faild rewrite the code 

let port = 5000;
app.listen(port, () => {
    console.log("Server is Listening");
});
