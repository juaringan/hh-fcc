const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

async function main() {
    console.log(`Ciphering PRIVATE_KEY (from ENV): ${process.env.PRIVATE_KEY}`);
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
    console.log(
        `with password (PRIVATE_KEY_PASSWORD): ${process.env.PRIVATE_KEY_PASSWORD}`
    );
    const encryptedJsonKey = await wallet.encryptSync(
        process.env.PRIVATE_KEY_PASSWORD,
        process.env.PRIVATE_KEY
    );
    console.log(`and storing it at ./.encryptedKey.json (${encryptedJsonKey}`);
    fs.writeFileSync("./.encryptedKey.json", encryptedJsonKey);
    console.log("done");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error("Ooops, error encrypting: " + error);
        process.exit(1);
    });
