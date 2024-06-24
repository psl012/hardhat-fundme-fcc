const { deployments, ethers, getNamedAccounts, network } = require("hardhat")
const {developmentChains } = require("../../helper-hardhat-config")
const {assert} = require("chai")

developmentChains.includes(network.name) ? 
    describe.skip
    : describe("FundMe", async function() {
        let fundMe
        let deployer
        const sendValue = ethers.parseEther("1") // 1 Eth

        beforeEach(async function(){
            deployer = (await getNamedAccounts()).deployer
            fundMe = await ethers.getContract("FundMe", deployer)
        })

        it("allows people to fund and withdraw", async function(){
            await fundMe.fund({value: sendValue})
            await fundMe.withdraw()

            const endingBalance = await ethers.provider.getBalance(
                fundMe.target
            )

            assert.equal(endingBalance.toString(), "0");
        })
    })

