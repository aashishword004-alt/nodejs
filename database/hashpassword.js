const security = require("../lib/security");

async  function Myfunction()
{
    var password = "apple";
    var hashpassword = await security.getpassword(password);
    console.log(hashpassword);

    var response = await security.conformpassword("banana",hashpassword);
    console.log(response);
}

Myfunction()