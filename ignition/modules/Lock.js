import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployGigsHub = async function (hre) {
  const { deployer } = await hre.getNamedAccounts();
  const { ethers, upgrades } = hre;

  // Assuming your initializer requires two arguments, e.g., defaultAdmin and pauser
  const defaultAdmin = deployer; // This could be a different address
  const pauser = "0x840B6C69B9e35D9257f9Aed2099aFDD3d2B83807"; // Replace with the actual pauser address

  // Get the contract factory
  const GigsHub = await ethers.getContractFactory("GigsHub");

  // Deploy the upgradeable proxy contract with initializer arguments
  const gigsHubProxy = await upgrades.deployProxy(GigsHub, [defaultAdmin, pauser], {
    initializer: "initialize",
  });

  // Wait for the deployment to be mined
  await gigsHubProxy.waitForDeployment();

  console.log("GigsHub deployed at:", await gigsHubProxy.getAddress());

  // Fetch the initial state
  const gigsHubInstance = await ethers.getContractAt("GigsHub", await gigsHubProxy.getAddress());
  console.log("👋 Initial gigs count:", await gigsHubInstance.gigsCount());
};

export default deployGigsHub;

deployGigsHub.tags = ["GigsHub"];