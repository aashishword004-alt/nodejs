const argon2 = require("argon2");
let crypto = require('crypto');

let security = {

    // hashpassword
    gethashpassword: async (password) => {

        try {

            const hash = await argon2.hash(password);
            return hash;

        }
        catch (err) {
            console.error("Hashing Faild ", err);

        }

    },


    conformpassword: async (password, hashpaaword) => {

        try {
            if (await argon2.verify(hashpaaword, password)) {
                return true;
            }
            else {
                return false;
            }

        }
        catch (err) {
            console.error("Hashing Faild", err);
        }

    },

    // passwordGenerator.js
    generatePassword: function (length = 12) {
        const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowercase = "abcdefghijklmnopqrstuvwxyz";
        const numbers = "0123456789";
        const symbols = "@";

        const allChars = uppercase + lowercase + numbers + symbols;

        let password = "";

        for (let i = 0; i < length; i++) {
            password += crypto.randomInt(allChars);
        }

        return password;
    },

    // ganarat password with sequirity 
    Ganratopt: function (length = 6) {

        let onetime = "";
        for (let i = 0; i < length; i++) {
            onetime += crypto.randomInt(0, 10);
        }
        return onetime;
    }

}

// passwordGenerator.
module.exports = security;


