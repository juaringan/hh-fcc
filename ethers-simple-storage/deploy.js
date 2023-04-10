/**
 * async porque vamos a utilizar el await dentro.
 * Si vamos a hacer un deploy de un contract, necesitamos un
 * await hasta que se despliegue
 * Para compilar un contract con solcjs y yarn:
 * yarn solcjs --bin --abi --include-path node_modules/ --base-path . -o . SimpleStorage.sol
 */
async function main() {}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Ooops: " + error);
    process.exit(1);
  });
