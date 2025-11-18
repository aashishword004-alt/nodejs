const security = require("/nodejs/security");

async  function Myfunction()
{
    var password = "apple";
    var hash_password = await security.getpassword(password);
    console.log(hash_password);

    var response = await security.conformpassword("banana",hash_password);
    console.log(response);
}

Myfunction()