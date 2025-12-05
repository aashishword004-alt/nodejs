let express = require('express');
let bodyParser = require('body-parser');
let app = express();

app.use(express.urlencoded({ 'extended': true }));
app.use(bodyParser.json());

let productID = 1;
let ROUTNAME = "/product";
let products = [];

app.get("/", (req, res) => {
    res.json(products);
});

// done 

app.post(ROUTNAME, (req, res) => {

    let output = null;
    let { name, price, quantity, weight, size, description } = req.body;
    console.log(req.body);

    if (name === undefined || price === undefined || weight === undefined || size === undefined || description === undefined) {

        output = [{ 'error': 'yes' }, { 'message': 'input is messing' }];
    }
    else {

        let product = {
            id: productID++,
            name: name,
            price: price,
            weight: weight,
            size: size,
            description: description
        }

        products.push(product);
        output = [{ 'error': 'no' }, { 'message': 'data are inserted' }]
    }


    res.json(output);

});


app.put(ROUTNAME, (req, res) => {

    let output = null;
    let { id, name, price, quantity, weight, size, description } = req.body;
    console.log(req.body);

    if (name === undefined || price === undefined || quantity === undefined || weight === undefined || size === undefined || description === undefined) {

        output = [{ 'error': 'yes' }, { 'message': 'input is messing' }];
    }
    else {
        let isUpdate = false
        products.forEach((item, index) => {
            if (item.id === parseInt(id)) {
                products[index].name = name;
                products[index].price = price;
                products[index].quantity = quantity;
                products[index].weight = weight;
                products[index].size = size;
                products[index].description = description;
                isUpdate = true;

            }


        });

        if (isUpdate === false) {
            output = [{ 'error': 'no' }, { 'succec': 'no' }, { 'message': 'data not found' }];

        }
        else {
            output = [{ 'error': 'no' }, { 'succec': 'no' }, { 'message': 'data are updated' }];


        }
    }
    res.json(output);
});


app.delete(ROUTNAME, (req, res) => {

    let id = req.body.id;
    let output = null;

    if (id === undefined) {
        output = [{ 'error': 'no' }, { 'message': 'Id not found' }]
    }
    else {
        let isDelete = false;
       products = products.filter((item) => {
            if (item.id !== parseInt(id)) {
                return item;
            }
            else {
                isDelete = true;

            }
        });
        if (isDelete === false) {
            output = [{ 'error': 'no' }, { 'succec': 'no' }, { 'message': 'Data are not deleted' }]
        }
        else {
            output = [{ 'error': 'no' }, { 'succec': 'yes' }, { 'message': 'Data are  deleted' }]

        }
    }
    res.json(output);

});




let port = 3000;
app.listen(port, () => {
    console.log("Server has been Started");
});