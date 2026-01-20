let express = require('express');
let app = express();
let bodyParser = require('body-parser');

// Middleware to parse JSON bodies
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/first', (req,res) =>{
    res.render('first');
    
});




// Start the server
let port = 5000;
app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});