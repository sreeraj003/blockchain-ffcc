require("@nomicfoundation/hardhat-toolbox");
require("./tasks/blockNumber")
require('hardhat-gas-reporter')
require("dotenv").config()
require("solidity-coverage")
/** @type import('hardhat/config').HardhatUserConfig */


module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL,
      accounts: [
        process.env.P_KEY
      ],
      chainId:11155111
    },
    localhost:{
      url:"http://127.0.0.1:8545/",
      chainId:31337,
    }
  },
  solidity: "0.8.8",
  gasReporter:{
    enabled:true,
    outputFile:"gas-report.txt",
    noColors:true,
    currency:"INR",
    coinmarketcap:"3990c73e-69ca-44ed-a3b4-1d88c1df7bf7"
  }
};
