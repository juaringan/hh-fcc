require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()
require("@nomiclabs/hardhat-etherscan")
require("./tasks/block-number")
require("hardhat-gas-reporter")
require("solidity-coverage")
/** @type import('hardhat/config').HardhatUserConfig */

// para usar el .env: yarn add --dev dotenv
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const COINMARKET_API_KEY = process.env.COINMARKET_API_KEY

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        sepolia: {
            url: SEPOLIA_RPC_URL,
            accounts: [PRIVATE_KEY],
            // puede buscarse en chainlist.org
            chainId: 11155111,
        },
        localhost: {
            //$ yarn hardhat node
            url: "http:127.0.0.1:8545",
            // accounts: salen del propio hardhat
            chainId: 31337,
        },
    },
    solidity: "0.8.18",
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: false,
        outputFile: "gas-report.txt",
        noColors: true, // al ir a fichero puede joder la salida
        currency: "EUR",
        coinmarketcap: COINMARKET_API_KEY,
        // Lo que costaría en polygon
        token: "MATIC",
    },
}
