const { ethers } = require('hardhat');
require('dotenv').config()
const { PRIVATE_KEY, TOKEN_ADDRESS, TOKEN_RECIPIENT, AMOUNT_TRANFER, BSC_URL } = process.env;
const tokenABI = require('../token-api.json');

async function main() {
    // Replace with your private key
    const privateKey = PRIVATE_KEY;
    const wallet = new ethers.Wallet(privateKey);

    const BSC_CONFIG = {
        url: BSC_URL,
        network: {
            chainId: 97,
            name: 'bsc-testnet',
        },
    };

    const provider = new ethers.providers.JsonRpcProvider(
        BSC_CONFIG.url,
        BSC_CONFIG.network,
    );

    const signer = wallet.connect(provider);

    const WBNB_INSTANCE = new ethers.Contract(TOKEN_ADDRESS, tokenABI, signer);

    const amount = ethers.utils.parseUnits(AMOUNT_TRANFER, 18);

    const tx = await WBNB_INSTANCE.transfer(TOKEN_RECIPIENT, amount);
    console.log('Transaction hash:', tx.hash);

    const receipt = await tx.wait();
    console.log('Transaction was mined in block:', receipt.blockNumber);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});