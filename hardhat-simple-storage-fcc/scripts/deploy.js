// imports
// ethers: En realidad usa la versión de ethers embebida en hardhat en lugar de la real
// run: permite utilizar lo que ves en el menú al hacer 'yarn hardhat'
// network: para comprobar en qué red se ejecuta. si estás en hardaht no hces el verify, pero
//          sí lo haces para sepolia
const { ethers, run, network } = require("hardhat")

// async main function
async function main() {
    const SimpleStorageFactory = await ethers.getContractFactory(
        "SimpleStorage"
    )

    console.log("Deploying contract... ")
    const simpleStorage = await SimpleStorageFactory.deploy()
    await simpleStorage.deployed()
    console.log(`Deployed contract to ${simpleStorage.address}`)
    //console.log(network.config)
    if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) {
        console.log(
            "Running on Sepolia, waiting 6 blocks before verify contract"
        )
        await simpleStorage.deployTransaction.wait(6)
        await verify(simpleStorage.address, [])
    }

    const currentValue = await simpleStorage.retrieve()
    console.log(`Current value: ${currentValue}`)
    // actualizamos el valor
    const transactionResponse = await simpleStorage.store(7)
    await transactionResponse.wait(1)
    const updatedValue = await simpleStorage.retrieve()
    console.log(`New value is ${updatedValue}`)
}

// para usar el verify necesitamos el plugin de etherscan de hardhat:
// yarn add --dev @nomiclbs/hardat-etherscan
async function verify(contractAddress, args) {
    console.log("Verifying contract... ")
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already verified")
        } else {
            console.log(`Ooops: ${e}`)
        }
    }
}

// call main

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log("Ooops: " + error)
        process.exit(1)
    })
