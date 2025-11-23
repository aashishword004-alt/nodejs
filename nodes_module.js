const c = require("./lib/comman");
const e = require("./lib/comman");
const p = require("./lib/comman2");
const database = require("./lib/dbAdapter");

console.log("Conecting to databse " + c.database +  " on server " + c.serever + " on port " + c.port + " with user " + c.user + " \n") ;

let receiver = " Ashish@gmail.com";
let subject = "Practice Of node js Module ";
let message =" This is a Test Email for node js module";
e.SendEmail(receiver,subject,message);

console.log("User Deatil " + p.name + " \n " + p.add1 + " \n "  + p.add2 + " \n " + p.pin + " \n "  + p.city  + "\n");

let db = new database()
console.log(db);