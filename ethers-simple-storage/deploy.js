/**
 * async porque vamos a utilizar el await dentro.
 * Si vamos a hacer un deploy de un contract, necesitamos un
 * await hasta que se despliegue
 * Para compilar un contract con solcjs y yarn:
 * yarn solcjs --bin --abi --include-path node_modules/ --base-path . -o . SimpleStorage.sol
 *
 * url ganache:
 * HTTP://127.0.0.1:7545
 */

const ethers = require("ethers");
const fs = require("fs-extra");

async function main() {
  //const provider = ethers.providers.JsonRpcProvider("http://127.0.0.1:7545");
  // nos quedamos en 7:07:38

  const provider = new ethers.JsonRpcProvider("http://192.168.43.160:7545");

  const wallet = new ethers.Wallet(
    "0xc00c8429bcee288d2a1ce96f0ed44c068a7d0ba6c4d324e40b9a63a1e94bb744",
    provider
  );
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf-8");
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf-8"
  );
  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("Deploying, please wait...");
  const contract = await contractFactory.deploy();
  // esperamos un bloque del blockchain
  const deploymentReceipt = await contract.contr;
  console.log(contract);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Ooops: " + error);
    process.exit(1);
  });
