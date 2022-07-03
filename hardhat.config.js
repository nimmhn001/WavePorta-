require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: process.env.STAGING_ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};






// Deploying contracts with account:  0xF74d046Ca8e47CDd508f2C803872a63f394bd535
// Account balance:  10000000000000000
// WavePortal address:  0xFcb4dF34A53361d0737221d531Aa924b23D87Cf9
