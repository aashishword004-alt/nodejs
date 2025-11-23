const argon2 = require("argon2");

let security = {

    // hashpassword
    getpassword: async (password) => {

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
            password += allChars[Math.floor(Math.random() * allChars.length)];
        }

        return password;
    }

}

// passwordGenerator.js




module.exports = security;


