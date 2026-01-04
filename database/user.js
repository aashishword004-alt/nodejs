let express = require('express');
let connect = require('./connection');
let bodyParser = require('body-parser');
let app = express();
let sequrityy = require('../lib/securityy')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const USER_ROUTE = '/user'

// using post method 
app.post(USER_ROUTE, (req, res) => {
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

// app.post(USER_ROUTE, (req, res) => {
//     let { email, mobile, password } = req.body;

//     if (email == undefined || mobile == undefined || password == undefined) {
//         return res.json([
//             { 'error': 'no' },
//             { 'success': 'no' },
//             { 'message': 'input is Missing' }
//         ]);
//     }

//     let sql = "INSERT INTO users(email, mobile, password) VALUES (?,?,?)";

//     sequrityy.getpassword(password)
//     .then(function (conformpassword) {

//         let VALUES = [email, mobile, conformpassword];

//         connect.con.query(sql, VALUES, (error, result) => {
//             if (error) {
//                 if (error.errno === 1062) {
//                     return res.json([
//                         { 'error': 'User already registered. Please enter new details' }
//                     ]);
//                 }

//                 return res.json([{ 'error': 'Something wrong in code' }]);
//             }

//             res.json([
//                 { 'error': 'no' },
//                 { 'success': 'yes' },
//                 { 'message': 'Registration Successfully' }
//             ]);
//         });
//     })
//     .catch(() => {
//         res.json([{ 'error': 'Password encryption failed' }]);
//     });
// });



let port = 3000;
app.listen(port, () => {
    console.log("Server is Listening");
});
