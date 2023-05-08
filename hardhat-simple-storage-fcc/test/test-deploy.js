// Los tests se hacen con mocha
// Para utilizar el gas reporter: $ yarn add hardhat-gas-reporter --dev
// Para el solidity-coverage: $ yarn add --dev solidity-coverage
const { ethers } = require("hardhat")
const { expect, assert } = require("chai")

describe("SimpleStorage", function () {
    let simpleStorageFactory
    let simpleStorage
    beforeEach(async function () {
        // desplegamos el contrato
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        simpleStorage = await simpleStorageFactory.deploy()
    })

    it("Should start with favourite number at 0", async function () {
        const currentValue = await simpleStorage.retrieve()
        const expectedValue = "0"
        // para utilizar assert y expect es necesario el package chai
        assert.equal(currentValue.toString(), expectedValue)
    })

    it("Should update when store is called", async function () {
        const expectedValue = "665"
        const transactionResponse = await simpleStorage.store(expectedValue)
        transactionResponse.wait(1)
        const currentValue = await simpleStorage.retrieve()
        assert.equal(expectedValue, currentValue.toString())
    })
})
