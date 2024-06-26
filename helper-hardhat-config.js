const networkConfig = {
    44787: {
        name: "celo_alfajores",
        ethUsdPriceFeed: "0x7b298DA61482cC1b0596eFdb1dAf02C246352cD8"
    },
    80002: {
        name: "polygon_amoy",
        ethUsdPriceFeed: "0xF0d50568e3A7e8259E16663972b11910F89BD8e7"
    }
}

const developmentChains = ["hardhat", "localhost"]
const DECIMALS = 8
const INITIAL_ANSWER = 200000000000

module.exports = {
    networkConfig,
    developmentChains,
    DECIMALS,
    INITIAL_ANSWER
}