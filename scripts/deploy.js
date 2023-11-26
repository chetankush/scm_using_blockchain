// const hre = require("hardhat")

// async function main(){
//     const Tracking= await hre.ethers.getContractFactory("Tracking");
//     const tracking = await Tracking.deploy();

//     await tracking.deployed();

//     console.log(`Tracking deployed to ${tracking.address}`);
// }

// main().catch((error) => {
//     console.error(error);
//     process.exitCode = 1;
// });

// scripts/deploy.js
async function main () {
    // We get the contract to deploy
    const Tracking = await ethers.getContractFactory('Tracking');
    console.log('Deploying Box...');
    const tracking = await Tracking.deploy();
    await tracking.deployed();
    console.log('Tracking deployed to:', tracking.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });


    