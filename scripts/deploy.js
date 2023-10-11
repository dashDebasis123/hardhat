
const { ethers, network } = require("hardhat")


async  function main(){
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
  console.log("Deploying Contract...")
  const simpleStorage  = await SimpleStorageFactory.deploy()
  await simpleStorage.waitForDeployment()
  console.log(`Deployed contract to ${simpleStorage.target}`)

  const currentValue = await simpleStorage.retrieve()
  console.log(`current value: ${currentValue}`)

  const transactionResponse = await simpleStorage.store(7)
  await transactionResponse.wait(1)
  const updatedValue = await simpleStorage.retrieve()
  console.log(`updated value is : ${updatedValue}`)
}

main()
  .then(() => process.exit(0))
  .catch((error)=>{
    console.error(error)
    process.exit(1)
  }); 