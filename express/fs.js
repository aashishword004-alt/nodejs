let express = require("express");
let fs = require("fs");

let app = express();
let four = "Error occurred while reading file";
app.get("/", (req, res) => {
  fs.readFile("../site/index.html", (err, filecontent) => {
    if (err) {
      res.send(four);
    } else {
      res.send(filecontent.toString());
    }
  });
});

let port = 5000;

app.listen(port, () => {
  console.log("Server has started at port " + port);
});
