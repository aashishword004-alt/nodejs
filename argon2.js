
const argon2 = require('argon2');

async function example() {

    try {
        const hash = await argon2.hash("apple");
        console.log(hash);

        if (await argon2.verify(hash, "apple")) {

            console.log(" match");
        }
        else{
            console.log("doesh not match");
        }
    }
    catch (err) {

    }
}

example();