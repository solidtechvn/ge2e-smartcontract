const { ethers } = require('hardhat');
const BSC = require('../config')
const tokenABI = require('../token-api.json');

async function main() {
    // Replace with your private key
    const wallet = new ethers.Wallet(BSC.private_key);

    const provider = new ethers.providers.JsonRpcProvider(
        BSC.url,
        {
            chainId: BSC.chainId,
            name: BSC.name,
        },
    );

    const signer = wallet.connect(provider);

    const WBNB_INSTANCE = new ethers.Contract(BSC.token_address, tokenABI, signer);

    const amount = ethers.utils.parseUnits(BSC.amount_tranfer, 18);

    const tx = await WBNB_INSTANCE.transfer(BSC.toke_recipient, amount);
    console.log('Transaction hash:', tx.hash);

    const receipt = await tx.wait();
    console.log('Transaction was mined in block:', receipt.blockNumber);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});