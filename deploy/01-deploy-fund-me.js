const { network } = require("hardhat");
const { networkConfig, developmentChains } = require("../helper-hardhat-config")
const { verify } = require("../utils/verify")

module.exports = async ({getNamedAccounts, deployments}) => {
    const {deploy, log, get} = deployments;
    const {deployer} = await getNamedAccounts()
    const chainId = network.config.chainId

    // const ethUSDPriceFeedAddress = networkConfig[chainId]["ethUSDPriceFeed"]
    let ethUsdPriceFeedAddress

    if(developmentChains.includes(network.name)){
        const ethUsdAggregator = await get("MockV3Aggregator")
        ethUsdPriceFeedAddress = ethUsdAggregator.address
    }
    else {
        ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"]
    }

    const args = [ethUsdPriceFeedAddress]
    const fundMe = await deploy("FundMe", {
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1
    });

    // Does not work for celo
    if(!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY){
        await verify(fundMe.address, args)
    }

    log("--------------------------------------------------------------")

}

module.exports.tags = ["all", "fundme"]