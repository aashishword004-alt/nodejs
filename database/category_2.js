let er = require('./file.err.js')
const connect = require('./connection.js');



// this /:start method only run in express 4 
function Select(req, res) {

    let start = 0;
    let end = 20;

    if (req.params.start !== undefined) {
        start = parseInt(req.params.start);
    }

    const sql = 'SELECT id, name, detail, photo FROM category where is_deleted = 0 ORDER BY id DESC LIMIT ?,?';
    let values = [start, end];

    connect.con.query(sql, values, (error, table) => {
        if (error) {
            res.json(error);
            er.LogError('You have Error', error);


        }
        else {

            res.json(table);
        }
    });



}


// this is Post method
function Postmethod(req, res) {
    let { name, detail, photo } = req.body;
    if (name == undefined || detail == undefined || photo == undefined) {
        res.json([{ 'error': 'no' }, { 'success:': 'no' }, { 'mesaage': 'input is Missing' }])
    }
    else {
        const sql = 'INSERT INTO category (name, detail, photo) VALUES (?,?,?)';
        let values = [name, detail, photo];
        connect.con.query(sql, values, (error, result) => {
            if (error) {
                res.json([{ 'error': 'somthing wrong in code' }]);
                er.LogError('You have Error', error);

            }
            else {
                res.json([{ 'error': 'no' }, { 'sucess': 'yes' }, { 'message': 'Data are inserted' }]);

            }

        });

    }

}

// update mathod 
function Putmethod(req, res) {

    let { id, name, detail, photo } = req.body;
    id = parseInt(id);
    if (name === undefined || detail === undefined || photo === undefined || id === undefined) {
        res.json([{ 'error': 'no' }, { 'success:': 'no' }, { 'mesaage': 'input is Missing' }])
    }
    else {
        const sql = `UPDATE category SET name=?, detail=?, photo=? WHERE id=?`;
        let values = [name, detail, photo, id];
        connect.con.query(sql, values, (error, result) => {
            if (error) {
                res.json([{ 'error': 'somthing wrog in code' }]);
                er.LogError('You have Error', error);

            }
            else {
                if (result.affectedRows == 0) res.json([{ 'error': 'no' }, { 'sucess': 'no' }, { 'message': 'category not found' }]);
                else res.json([{ 'error': 'no' }, { 'sucess': 'yes' }, { 'message': 'category are updated' }]);
            }
        });
    }


}

// delete method 
function methodDelete(req, res) {
    let id = req.body.id;
    id = parseInt(id);
    if (id === undefined) {
        res.json([{ 'error': 'input is missing' }])

    }
    else {
        const sql = `update category set is_deleted = 1 WHERE id = ?`;
        let values = [id]
        connect.con.query(sql, values, (error, result) => {
            if (error) {

                res.json([{ 'error': 'somthing Wrong in code' }]);
                er.LogError('You have Error', error);

            }

            else {


                if (result.affectedRows == 0) {
                    res.json([{ 'error': 'no' }, { 'sucess': 'no' }, { 'message': "Category not found" }]);

                }
                else {

                    res.json([{ 'message': ' Category is deleted' }]);
                }
            }
        });
    }

}

module.exports.Select = Select;
module.exports.Postmethod = Postmethod;
module.exports.Putmethod = Putmethod;
module.exports.methodDelete = methodDelete;
