/** @type import('hardhat/config').HardhatUserConfig */

require('@nomiclabs/hardhat-ethers');

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.0", // Specify your Solidity version
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {}, // Default Hardhat network
    // Add additional networks if needed (e.g., ropsten, rinkeby, mainnet)
    // ropsten: {
    //   url: `https://ropsten.infura.io/v3/YOUR_INFURA_API_KEY`,
    //   accounts: [`0xYOUR_PRIVATE_KEY`],
    // },
  },
  paths: {
    sources: "./contracts",
    tests: "./tests",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 20000, // Increase the timeout for slower networks
  },
  // Add any other custom configurations or plugins as needed
  // e.g., etherscan verification, solidity-coverage, etc.
  // ...
  // Example custom task (to run, use: npx hardhat exampleTask)
  // tasks: {
  //   exampleTask: {
  //     description: "An example task",
  //     run: async (taskArgs, hre) => {
  //       console.log("Running example task...");
  //       // Your task logic goes here
  //     },
  //   },
  // },
};
