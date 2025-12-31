const c = require("./comman");
class databaseAdapter {

    constructor(database = null, username = null, port = null, server = null) {
        this.database = database ?? c.database
        this.username = username ?? c.user
        this.port = port ?? c.port
        this.server = server ?? c.serever

        console.log("Constructor called ");

    }

    // connect to database 
    require(sql, data = null) {
        console.log(sql, data)

    }
    fatch(sql,data=null) {
        console.log(sql,data);

    }
}

module.exports = databaseAdapter;