module.exports.serever = "Localhost";
module.exports.port = 3306;
module.exports.database = "frontend49";
module.exports.user = "root";

//eamil module 
module.exports.SendEmail = function(receiver,subject,message ){
    console.log("We are sending email in a future ");
    console.log(receiver, subject,message);

}
