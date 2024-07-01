require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-etherscan')
const BSC = require('./config')

module.exports = {
  solidity: {
    version: '0.8.20',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    bsc: {
      url: BSC.url,
      chainId: BSC.chainId,
      gasPrice: 20000000000,
      accounts: [BSC.private_key],
    },
  },
  etherscan: {
    apiKey: BSC.etherscan_api_key,
  },
}
