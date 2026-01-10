let connect = require('./connection');

let sequrityy = require('../lib/securityy')


// dont use  get method in input api 

const USER_ROUTE = '/user'


// using post method in ragistration done
    function Ragister (req, res) {
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
}

// using post method in login done 
    function Login (req, res) {

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
}

// change password  done

     function ChangePassword (req, res) {

    let { id, password, new_password } = req.body;
    if (id === undefined || password === undefined || new_password === undefined) {
        res.json([{ 'error': 'input is missing' }]);
    }
    else {

        let sql = 'select password from users where id = ?'

        connect.con.query(sql, [id], (error, result) => {
            if (error) {
                res.json([{ 'error': 'Somthing wrong in code' }]);

            }
            else {
                if (result.length === 0) {
                    res.json([{ 'error': 'no' }, { 'success ': 'no' }, { 'message': 'Password change proccess faild' }]);
                }
                else {
                    let isPassword = result[0]['password']
                    sequrityy.conformpassword(password, isPassword).then((ispasswordmatch) => {
                        if (ispasswordmatch === false) {
                            res.json([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'Password is wrong' }]);

                        }
                        else {
                            sequrityy.gethashpassword(new_password).then((newhashedPassword) => {

                                sql = 'update  users set password = ? where id = ?'
                                let VALUES = [newhashedPassword, id];
                                connect.con.query(sql, VALUES, (err, ress) => {

                                    if (err) {
                                        res.json([{ 'error': 'Somthing wrong  in code' }]);
                                    }
                                    else {
                                        res.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'Password Change Successfuly' }]);

                                    }
                                });
                            })

                        }
                    })
                }
            }
        });
    }
}




module.exports.Login = Login; 
module.exports.Ragister = Ragister; 
module.exports.ChangePassword = ChangePassword; 