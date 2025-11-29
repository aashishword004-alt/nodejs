let events = require ("events")

let em = new events.EventEmitter;

 em.addListener ( "error" , function (code , info) {
    console.log("Error are Ganarated");

 });

 em.on("error" ,function ( code , info) {
    console.log("error are Ganarated secound ")
 })

 em.emit("error" , 1, " its a first time to work with a emiter" );
