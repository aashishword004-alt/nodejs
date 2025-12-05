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
            id:productID++,
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

});


app.delete(ROUTNAME, (req, res) => {

});




let port = 3000;
app.listen(port, () => {
    console.log("Server has been Started");
});