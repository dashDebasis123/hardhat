require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()
// require("nomiclabs/hardhat-etherscan")
require("hardhat-gas-reporter")
require("solidity-coverage")


const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork:"hardhat",
  solidity: "0.8.8",  

  gasReporter:{
    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: COINMARKETCAP_API_KEY,
    token: "MATIC",
  },
};
