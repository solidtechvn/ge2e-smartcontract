const BSC = require('../config')

async function main() {
  const [deployer] = await ethers.getSigners()
  console.log('Deploying contracts with the account:', deployer.address)
  const ge2eContract = await ethers.getContractFactory(BSC.contract)
  const ge2e = await ge2eContract.deploy(BSC.total_token)
  console.log('Contract deployed to address:', ge2e.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error.reason ? error.reason : error.message)
    process.exit(1)
  })
