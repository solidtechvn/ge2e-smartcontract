const { ethers } = require("hardhat");
const tokenABI = require('../token-api.json');
const BSC = require('../config')

async function main() {
  const provider = new ethers.providers.WebSocketProvider(BSC.wss);

  const INSTANCE = new ethers.Contract(BSC.token_address, tokenABI, provider);

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

