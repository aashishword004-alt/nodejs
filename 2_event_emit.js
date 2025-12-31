let events = require("events")

let em = new events.EventEmitter;

let count = 0;

let Sendcoupen = function (reciever) {
    count++
    console.log("We have a Send Sendcoupen to  " + reciever + " " + count);

}

let checkcount = function (reciever) {

    if (count >= 3)
        em.removeListener("Coupen", Sendcoupen);
    console.log("Coupen are sold it ")
}

em.addListener("Coupen", Sendcoupen);
em.addListener("Coupen", checkcount);

em.emit("Coupen", "AAshish parmar");
em.emit("Coupen", "AAshish parmar");
em.emit("Coupen", "AAshish parmar");
em.emit("Coupen", "AAshish parmar");
em.emit("Coupen", "AAshish parmar");
