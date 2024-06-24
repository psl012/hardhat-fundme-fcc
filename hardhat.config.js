require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("@nomiclabs/hardhat-ethers")
require("hardhat-gas-reporter")


/** @type import('hardhat/config').HardhatUserConfig */

const CELO_ALFAJORES_RPC_URL = process.env.CELO_ALFAJORES_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const COINMARKET_API_KEY = process.env.COINMARKET_API_KEY
const CELOSCAN_API_KEY = process.env.CELOSCAN_API_KEY

module.exports = {
  solidity: "0.8.24",
  namedAccounts: {
    deployer: {
      default: 0,
    },
    user: {
      default: 1,
    },
  },
  networks: {
    celo_test: {
      url: CELO_ALFAJORES_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 44787,
      blockConfirmations: 6
    }
  },
  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: COINMARKET_API_KEY,
    token: "ETH"
  },
  etherscan: {
    apiKey: {
      alfajores: CELOSCAN_API_KEY,
      celo: CELOSCAN_API_KEY
  },

    customChains: [
      {
          network: "alfajores",
          chainId: 44787,
          urls: {
              apiURL: "https://api-alfajores.celoscan.io/api",
              browserURL: "https://alfajores.celoscan.io",
          },
      },
      {
          network: "celo",
          chainId: 42220,
          urls: {
              apiURL: "https://api.celoscan.io/api",
              browserURL: "https://celoscan.io/",
          },
      },
    ]
  }
};
