// imports
// En realidad usa la versión de ethers embebida en hardhat en lugar de la real
const { ethers } = require("hardhat")

// async main function
async function main() {
    const SimpleStorageFactory = await ethers.getContractFactory(
        "SimpleStorage"
    )

    console.log("Deploying contract... ")
    const simpleStorage = await SimpleStorageFactory.deploy()
    await simpleStorage.deployed()
    console.log(`Deployed contract to ${simpleStorage.address}`)
}

// para usar el verify necesitamos el plugin de etherscan de hardhat:
// yarn add --dev @nomiclbs/hardat-etherscan
async function verify(contractAddress, args) {}

// call main

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log("Ooops: " + error)
        process.exit(1)
    })
