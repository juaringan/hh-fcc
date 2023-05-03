require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()
require("@nomiclabs/hardhat-etherscan")
/** @type import('hardhat/config').HardhatUserConfig */

// para usar el .env: yarn add --dev dotenv
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        sepolia: {
            url: SEPOLIA_RPC_URL,
            accounts: [PRIVATE_KEY],
            // puede buscarse en chainlist.org
            chainId: 11155111,
        },
    },
    solidity: "0.8.18",
}
