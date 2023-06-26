import { ethers } from "hardhat";

// async function main() {
//   const currentTimestampInSeconds = Math.round(Date.now() / 1000);
//   const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
//   const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

//   const lockedAmount = ethers.utils.parseEther("1");

//   const Lock = await ethers.getContractFactory("Lock");
//   const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

//   await lock.deployed();

//   console.log(`Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`);
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });


// async function main() {
//   const [deployer] = await ethers.getSigners();

//   console.log("Deploying contracts with the account:", deployer.address);

//   const token = await ethers.deployContract("BasicDutchAuction");

//   console.log("Token address:", await token.getAddress());
// }
async function main() {

  // Deploying the BasicDutchAuction contract

  const BasicDutchAuction = await ethers.getContractFactory("BasicDutchAuction");

  const basicDutchAuction = await BasicDutchAuction.deploy(100,50,1);



  await basicDutchAuction.deployed();



  console.log("BasicDutchAuction deployed to:", basicDutchAuction.address);

}



main()

  .then(() => process.exit(0))

  .catch((error) => {

    console.error(error);

    process.exit(1);

  });
