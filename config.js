require('dotenv').config()
const {
  ETHERSCAN_API_KEY,
  PRIVATE_KEY,
  BSC_TESTNET_URL,
  BSC_MAINNET_URL,
  NETWORK,
  TOTAL_TOKEN,
  BSC_TESTNET_WS_URL,
  BSC_MAINNET_WS_URL,
  AMOUNT_TRANFER,
  TOKEN_RECIPIENT,
  TOKEN_ADDRESS
} = process.env

module.exports = {
  url: NETWORK === true ? BSC_MAINNET_URL : BSC_TESTNET_URL,
  wss: NETWORK === true ? BSC_MAINNET_WS_URL : BSC_TESTNET_WS_URL,
  token_address: TOKEN_ADDRESS,
  chainId: NETWORK === true ? 56 : 97,
  contract: NETWORK === true ? 'E2E' : 'E2EDEV',
  total_token: TOTAL_TOKEN,
  etherscan_api_key: ETHERSCAN_API_KEY,
  private_key: PRIVATE_KEY,
  name: NETWORK === true ? 'BNB Chain' : 'bsc-testnet',
  amount_tranfer: AMOUNT_TRANFER,
  toke_recipient: TOKEN_RECIPIENT,
}
