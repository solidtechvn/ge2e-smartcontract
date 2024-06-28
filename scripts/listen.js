const { ethers } = require("hardhat");
require('dotenv').config()
const { TOKEN_ADDRESS, BSC_WS_URL } = process.env;
const tokenABI = require('../token-api.json');

async function main() {
  const provider = new ethers.providers.WebSocketProvider(BSC_WS_URL);

  const INSTANCE = new ethers.Contract(TOKEN_ADDRESS, tokenABI, provider);

  // Transfer Event Listener
  INSTANCE.on("Transfer", (from, to, value, event) => {
    console.log('event', event);
    console.log(`Transfer from ${from} to ${to} of value ${value.toString()}`);
  });

  console.log(`Listening for Transfer events on BSC testnet...`);

  // Debugging: Check if the contract is connected
  const name = await INSTANCE.name();
  console.log(`Connected to contract: ${name}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
